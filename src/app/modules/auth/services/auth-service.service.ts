import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }
  private readonly apiUrl = environment.api;

  admin: boolean = false;
  idUsuario: number = -1;

  sendCredentials(username: string, password: string): Observable<any> {
    const body = { username, password };

    return this.httpClient.post<any>(`${this.apiUrl}/auth/login`, body).pipe(
      tap((res) => {
        if (res.token) {
          this.cookieService.set('token', res.token, 4, '/');
          console.log('Token guardado en cookie:', res.token);
        }
        this.admin = this.isAdmin(res.token);
      })
    );
  }

  logout(): void {
    this.cookieService.delete('token', '/');
  }
  
  isAdmin(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);
      const userRole: string[] = decoded.roles || [];
      return userRole.includes('ROLE_ADMIN');
    } catch (error) {
      console.log('Error al decodificar el token:', error);
      return false;
    }
  }
}
