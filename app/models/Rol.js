const Database = require('../config/database');
const body = require('../shared/ReqBody');

class Rol {

    constructor(req) {
        if (req) {
            this.id = body.number(req.id);
            this.nombre = body.string(req.nombre);
            this.estado = body.boolean(req.estado);

            //Usuario quien realiza la peticion. Para Auditoria
            this.usuarioAud = body.string(req.usuarioAud);
        }
    }

    create() {
        let funcion = `select * from "Seguridad".fn_sg_insert_rol(${this.nombre}, ${this.usuarioAud})`;
        return Database.query(funcion);
    }

    getAll() {
        let funcion = `select * from "Seguridad".fn_sg_select_roles()`;
        return Database.query(funcion);
    }

    update() {
        let funcion = `select * from "Seguridad".fn_sg_update_rol(${this.id}, ${this.nombre}, ${this.usuarioAud})`;
        return Database.query(funcion);
    }

    delete() {
        let funcion = `select * from "Seguridad".fn_sg_delete_rol(${this.id})`;
        return Database.query(funcion);

    }
}

module.exports = Rol;