import {CRMController} from './controllers/crm.controller';

// instanciamos el motor (creamos el objeto en memoria)

const miEscuelaCRM = new CRMController("1.0.0");

// Usamos sus metodos

miEscuelaCRM.usuariosDelCentro=[];

const profesores = miEscuelaCRM.filtrarUsuariosPorRol("profesor");

console.log("version del CRM: ", miEscuelaCRM.verVersion());

console.log("profesores del centro:", profesores);

