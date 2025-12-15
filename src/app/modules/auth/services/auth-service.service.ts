import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }
  private readonly apiUrl = environment.api;

  sendCredentials(username: string, password: string): Observable<any> {
  const body = { username, password };

  return this.httpClient.post<any>(`${this.apiUrl}/auth/login`, body).pipe(
    tap((res) => {
      if (res.token) {
        this.cookieService.set('token', res.token, 4, '/');
        console.log('Token guardado en cookie:', res.token);
      }
    }),
    catchError((error) => {
      const errorMessage = error.error?.message || 'Error desconocido';
      return throwError(() => new Error(errorMessage));
    })
  );
}

}
