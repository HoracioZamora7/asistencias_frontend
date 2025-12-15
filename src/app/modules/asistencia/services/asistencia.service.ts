import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.prod';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }
  private readonly apiUrl = environment.api;

  getAsistenciasDelDia(){
    const token = this.cookieService.get('token');
    if(!token) {
      console.error('No se encontró el token de autenticación.');
      return
    }

    const decoded: any = jwtDecode(token);
    const idUsuario = decoded.id;

    console.log('ID de usuario decodificado:', idUsuario);

  }
  
}
