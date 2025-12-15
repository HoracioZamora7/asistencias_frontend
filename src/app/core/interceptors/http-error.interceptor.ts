import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoggingService } from '@shared/services/logging.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private loggingService: LoggingService, private cookiesService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    /* console.log('HttpErrorInterceptor: ', request); */
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.loggingService.logHTTPError(error);
        switch(error.status){
          case 400:
            console.warn('Solicitud incorrecta (400)');
            break;

          case 401:
            console.warn('No autorizado (401).');
            this.cookiesService.delete('token');
            break;

          case 403:
            console.warn('Acceso prohibido (403)');
            break;

          case 404:
            console.warn('Recurso no encontrado (404)');
            break;

          case 500:
            console.warn('Error interno del servidor (500)');
            break;

          default:
            console.warn('Error inesperado');
        }
        
        return throwError(() => error);
      })
    );
  }
}
