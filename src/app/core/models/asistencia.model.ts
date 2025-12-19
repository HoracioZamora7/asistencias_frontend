export interface AsistenciaModel {
  id: number;
  idUsuario: number;
  dni: string;
  nombreUsuario: string;
  estado: string;
  fecha: string; 
  horaEntrada: string;
  horaSalida: string; 
  mcaJustificada: boolean;
}

export interface AsistenciaHistorialModel{
  content: AsistenciaModel[];
  first: boolean;
  last: boolean;
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}