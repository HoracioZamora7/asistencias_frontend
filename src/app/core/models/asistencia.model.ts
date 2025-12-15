export interface AsistenciaModel {
  id: number;
  idUsuario: number;
  nombreUsuario: string;
  dni: string;
  fecha: string; 
  horaEntrada: string;
  horaSalida: string; 
  mcaJustificada: boolean;
  estado: string;
}
