export interface ReporteModel{
    totalPuntuales: number;
    totalTardanzasySalidasTempranas: number;
    totalFaltas: number;
}

export interface ReporteDetalleModel {
  fecha: string;
  totalAsistencias: number;
  puntuales: number;
  tardanzas: number;
  entradasPuntualesSalidasTempranas: number;
  entradasTardiasSalidasTempranas: number;
  faltas: number;
  entradasSinSalidas: number;
  justificacionesAceptadas: number;
  totalJustificaciones: number;
}
