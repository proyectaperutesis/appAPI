const Database = require('../config/database');
const body = require('../shared/ReqBody');
const bcrypt = require('bcrypt');

function passwordCrypt(password) {
    //Uso de bcrypt
    let promise = new Promise((res, rej) => {
        bcrypt.genSalt(10).then(salts => {
            bcrypt.hash(password, salts).then(hash => {
                password = hash;
                console.log(password);
                res(body.string(password));
            }).catch(error => { rej(error) });
        }).catch(error => { rej(error) });
    });
    return promise;
}

class Usuario {
    constructor(req) {
        this.id = body.number(req.id);
        this.username = body.string(req.username);
        this.password = req.password;

        //Persona---------
        this.dni = body.string(req.dni);
        this.nombre = body.string(req.nombre);
        this.email = body.string(req.email);
        this.apellidoPaterno = body.string(req.apellidoPaterno);
        this.apellidoMaterno = body.string(req.apellidoMaterno);
        this.fhNacimiento = body.string(req.fhNacimiento);

        //Rol--------------------
        this.idRol = body.number(req.idRol);

        //Usuario quien realiza la peticion. Para Auditoria
        this.usuarioAud = body.string(req.usuarioAud);
    }

    create() {
        passwordCrypt(this.password).then(password => {
            let funcion = `select * from "Seguridad".fn_sg_insert_usuario_persona(${this.dni}, ${this.nombre}, ${this.apellidoPaterno},
                ${this.apellidoMaterno}, ${this.email}, ${password}, ${this.fhNacimiento},
                ${this.idRol}, ${this.usuarioAud})`;
                console.log(funcion);
                
            return Database.query(funcion);
        }).catch(error => {
            let promise = new Promise((res, rej) => {
                rej(error);
            });
            return promise;
        });
    }

    getAll() {
        let funcion = `select * from "Seguridad".fn_sg_select_usuarios()`;
        return Database.query(funcion);
    }

    login() {
        let funcion = `select * from "Seguridad".fn_sg_login(${this.username})`;
        return Database.query(funcion);
    }

}

module.exports = Usuario;