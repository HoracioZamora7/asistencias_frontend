export interface JustificacionPeticionModel{
    idUsuario: number;
    fecha: string;
    idTipo: number;
    comentario: string;
}

export interface JustificacionModel{
    comentario: string;
    dni: string;
    estado: string;
    fecha: string;
    fechaRevision: string;
    id: number;
    idUsuario: number;
    nombreEmpleado: string;
    tipo: string;
    username: string;
};

export interface PaginatedJustificacionModel{
    content: JustificacionModel[];
    first: boolean;
    last: boolean;
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
}