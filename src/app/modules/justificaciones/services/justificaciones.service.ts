import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JustificacionModel, PaginatedJustificacionModel } from '@core/models/justificacion.model';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class JustificacionesService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }
  private readonly apiUrl = environment.api


  registrarJustificacion(fecha: string, idTipo: number, comentario: string) {
    
    const token = this.cookieService.get('token');
    const decoded: any = jwtDecode(token);
    const idUsuario = decoded.id;

    
    const body = { idUsuario, fecha, idTipo, comentario };

    return this.httpClient.post(`${this.apiUrl}/asistencia/justificaciones_solicitud`, body)
    .pipe(
      tap(response => {
        console.log('Justificación enviada con éxito:', response);
      })
    );
  }
  
  getListaJustificaciones(page: number, size: number, idEstado: number): Observable<PaginatedJustificacionModel> {

    const token = this.cookieService.get('token');
    const decoded: any = jwtDecode(token);
    const idUsuario = decoded.id;

    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('idEstado', idEstado)
    
    return this.httpClient.get<PaginatedJustificacionModel>(`${this.apiUrl}/asistencia/justificaciones`, { params });


  }

  aprobarJustificacion(idJustificacion: number): void{
    const token = this.cookieService.get('token');
    const decoded: any = jwtDecode(token);
    const idAdmin = decoded.id;

    const body = { idJustificacion, idAdmin };

    this.httpClient.post(`${this.apiUrl}/asistencia/justificaciones_aprobar`, body)
    .subscribe(response => {
      console.log('Justificación aprobada con éxito:', response);
    });
  }

  rechazarJustificacion(idJustificacion: number): void{
    const token = this.cookieService.get('token');
    const decoded: any = jwtDecode(token);
    const idAdmin = decoded.id;
    
    const body = { idJustificacion, idAdmin };
    this.httpClient.post(`${this.apiUrl}/asistencia/justificaciones_rechazar`, body)
    .subscribe(response => {
      console.log('Justificación rechazada con éxito:', response);
    });
  }

}
