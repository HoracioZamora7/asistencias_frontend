import { Injectable } from '@angular/core';
import { ReporteDetalleModel } from '@core/models/reporte.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getReporteMensual(): Observable<ReporteDetalleModel[]>{
    const data: ReporteDetalleModel[] = [
      {
        fecha: 'Julio 2025',
        totalAsistencias: 22,
        puntuales: 15,
        tardanzas: 5,
        entradasPuntualesSalidasTempranas: 1,
        entradasTardiasSalidasTempranas: 1,
        faltas: 2,
        entradasSinSalidas: 0,
        justificacionesAceptadas: 1,
        totalJustificaciones: 3
      },
      {
        fecha: 'Agosto 2025',
        totalAsistencias: 20,
        puntuales: 14,
        tardanzas: 4,
        entradasPuntualesSalidasTempranas: 1,
        entradasTardiasSalidasTempranas: 1,
        faltas: 2,
        entradasSinSalidas: 0,
        justificacionesAceptadas: 2,
        totalJustificaciones: 4
      },
      {
        fecha: 'Septiembre 2025',
        totalAsistencias: 23,
        puntuales: 18,
        tardanzas: 3,
        entradasPuntualesSalidasTempranas: 1,
        entradasTardiasSalidasTempranas: 1,
        faltas: 1,
        entradasSinSalidas: 0,
        justificacionesAceptadas: 2,
        totalJustificaciones: 3
      },
      {
        fecha: 'Octubre 2025',
        totalAsistencias: 21,
        puntuales: 17,
        tardanzas: 2,
        entradasPuntualesSalidasTempranas: 1,
        entradasTardiasSalidasTempranas: 1,
        faltas: 1,
        entradasSinSalidas: 0,
        justificacionesAceptadas: 1,
        totalJustificaciones: 2
      },
      {
        fecha: 'Noviembre 2025',
        totalAsistencias: 22,
        puntuales: 16,
        tardanzas: 4,
        entradasPuntualesSalidasTempranas: 1,
        entradasTardiasSalidasTempranas: 1,
        faltas: 1,
        entradasSinSalidas: 0,
        justificacionesAceptadas: 2,
        totalJustificaciones: 3
      },
      {
        fecha: 'Diciembre 2025',
        totalAsistencias: 18,
        puntuales: 12,
        tardanzas: 4,
        entradasPuntualesSalidasTempranas: 1,
        entradasTardiasSalidasTempranas: 1,
        faltas: 2,
        entradasSinSalidas: 0,
        justificacionesAceptadas: 1,
        totalJustificaciones: 3
      }
    ];

    return of(data);
  }
}
