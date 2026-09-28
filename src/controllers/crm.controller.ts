import type { usuario, Rol } from '../models/interfaces';


export class CRMController {
    //Propiedades

    public usuariosDelCentro: usuario[] = [];

    //Constructor: se ejecutra al nacer el objeto
    constructor(private version: string){
        this.usuariosDelCentro = [
                { id: 1, nombre: 'Juan Perez', rol: 'alumno', activo: true, tieneCoche: "Toyota" },
                { id: 2, nombre: 'Maria Garcoa', rol: 'profesor', activo: true },
                { id: 3, nombre: 'Pedro Lopez', rol: 'admin', activo: true },
                { id: 4, nombre: 'Ana Martinez', rol: 'profesor', activo: false },
                { id: 5, nombre: 'Luis Fernandez', rol: 'alumno', activo: true},
                { id: 6, nombre: 'Patricia Sanchez', rol: 'alumno', activo: false },

        ]
    }
    //Métodos: La funcion de ayer, que estaba en counter, convertida en un ,método o habilildad
    filtrarUsuariosPorRol(rolBuscado: Rol): usuario[] {
        // usamos this para referirno a la propiedad de esta misma clase
        return this.usuariosDelCentro.filter(usuario => usuario.rol === rolBuscado);
    }


    actualizarVersion(nuevaVersion: string): void {
        this.version =  nuevaVersion;
    }

    verVersion(): string {
        return this.version;
    }

    agregarUsuario(nuevoUsuario:usuario): void{
        

        const idExistente = this.usuariosDelCentro.some(user => user.id === nuevoUsuario.id);

        if(idExistente){
            console.log("error,el id ya existe");
            return;
        }else {
            this.usuariosDelCentro.push(nuevoUsuario);
            console.log("el usuario ha sido agregado correctamente");
        }

    }
}