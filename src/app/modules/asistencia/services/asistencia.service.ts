import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.prod';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AsistenciaHistorialModel, AsistenciaModel } from '@core/models/asistencia.model';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }
  asistenciaDelDiaSubject: BehaviorSubject<AsistenciaModel | null> = new BehaviorSubject<AsistenciaModel | null>(null);
  
  private readonly apiUrl = environment.api;
  private readonly asistenciaEndpoint = `${this.apiUrl}/asistencia`;

  getAsistenciasDelDia(): void{
    const token = this.cookieService.get('token');
    const decoded: any = jwtDecode(token);
    const idUsuario = decoded.id;
    
    console.log('ID de usuario decodificado:', idUsuario);

    this.httpClient.get<AsistenciaModel>(`${this.asistenciaEndpoint}/fecha_actual/${idUsuario}`/* ,
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      } */
    ).subscribe({
      next: (asistencia) => {
        console.log('Asistencia del día obtenida:', asistencia);
        this.asistenciaDelDiaSubject.next(asistencia);
        /* console.log(this.asistenciaDelDiaSubject.value); */
      }
    });
  }

  checkIn(): void {
    const token = this.cookieService.get('token');
    if (!token) {
      throw new Error('No se encontró el token');
    }

    const decoded: any = jwtDecode(token);
    const idUsuario: number = Number(decoded.id);

    this.httpClient.post<AsistenciaModel>( `${this.asistenciaEndpoint}/checkin`, idUsuario,
      {
        headers: new HttpHeaders({
          //'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        })
      }
    )
    .subscribe({
      next: asistencia => {
        console.log('Check-in bueno:', asistencia);
        this.asistenciaDelDiaSubject.next(asistencia);
      }
    });
  }

  checkOut(): void {
    const token = this.cookieService.get('token');
    if (!token) {
      throw new Error('No se encontró el token');
    }
    
    const decoded: any = jwtDecode(token);
    const idUsuario = decoded.id;

    this.httpClient.post<AsistenciaModel>( `${this.asistenciaEndpoint}/checkout`, idUsuario,
      {
        headers: new HttpHeaders({
          //'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        })
      }
    )
    .subscribe({
      next: asistencia => {
        console.log('Check-out bueno:', asistencia);
        this.asistenciaDelDiaSubject.next(asistencia);
      }
    });
  } 

  getHistorialAsistencias(page: number, size: number, fechaInicio: string, fechaFin: string): Observable<AsistenciaHistorialModel> {
    const token = this.cookieService.get('token');
    if (!token) {
      throw new Error('No se encontró el token');
    }

    const decoded: any = jwtDecode(token);
    const idUsuario = decoded.id;

    const params = new HttpParams()
      .set('page', page )
      .set('size', size)
      .set('fechaInicio', fechaInicio)
      .set('fechaFin', fechaFin);

    return this.httpClient.get<AsistenciaHistorialModel>(`${this.asistenciaEndpoint}/historial/${idUsuario}`,
      {
        params: params
      }
      );
    }
}
  

/* http://localhost:8080/asistencia/historial/5?page=0&size=10&fechaInicio=2025-01-01&fechaFin=2025-12-31 */