import { Injectable } from '@angular/core';
import { interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelojService {

  constructor() { }
  reloj$ = interval(1000).pipe(
    map(() => {
      const now = new Date();
      return { hora: new Intl.DateTimeFormat('es-PE', {
          timeZone: 'America/Lima',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }).format(now),

        segundos: new Intl.DateTimeFormat('es-PE', {
          timeZone: 'America/Lima',
          second: '2-digit'
        }).format(now),

        fecha: new Intl.DateTimeFormat('es-PE', {
          timeZone: 'America/Lima',
          weekday: 'long',
          day: '2-digit',
          month: '2-digit'
        }).format(now)
      };
    }),
  );

  hoyISO(): string {
    const hoy = new Date();
    return hoy.toISOString().split('T')[0];
  }
  
  haceDiasISO(dias: number): string {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() - dias);
    return fecha.toISOString().split('T')[0];
  }
  
}
