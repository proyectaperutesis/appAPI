const Database = require('../config/database');
const body = require('../shared/ReqBody');

class ProyectoLey {

    constructor(req) {
        if (req) {
            this.nombre = body.string(req.nombre);
            this.titulo = body.string(req.titulo);
            this.estado = body.boolean(req.estado);
            this.idUsuario = body.number(req.idUsuario);
            this.idCategoria = body.number(req.idCategoria);
            this.objetoLey = body.string(req.objetoLey);
            this.fundamentoLey = body.string(req.fundamentoLey);

            //Usuario quien realiza la peticion. Para Auditoria
            this.usuarioAud = body.string(req.usuarioAud);
        }
    }

    create() {
        let funcion = `select * from "Gestion".fn_gs_insert_proyecto_ley(${this.nombre}, ${this.titulo}, ${this.usuarioAud},
            ${this.idUsuario}, ${this.idCategoria}, ${this.objetoLey}, ${this.fundamentoLey})`;
        return Database.query(funcion);
    }

    getMisProyectosLey() {
        let funcion = `select * from "Gestion".fn_gs_select_mis_pl(${this.idUsuario}, ${this.estado})`;
        console.log(funcion);
        
        return Database.query(funcion);
    }

    // update() {
    //     let funcion = `select * from "Seguridad".fn_sg_update_rol(${this.id}, ${this.nombre}, ${this.usuarioAud})`;
    //     return Database.query(funcion);
    // }

    // delete() {
    //     let funcion = `select * from "Seguridad".fn_sg_delete_rol(${this.id})`;
    //     return Database.query(funcion);
    // }
}

module.exports = ProyectoLey;