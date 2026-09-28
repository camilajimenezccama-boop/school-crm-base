export type Rol = 'admin' | 'profesor' | 'alumno';

export interface usuario {
    id: number;
    nombre: string;
    rol: Rol;
    activo:  Boolean;
    tieneCoche?: string;

}