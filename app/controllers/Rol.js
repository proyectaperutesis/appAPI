const Rol = require('../models/Rol');
const _http = require('../shared/StatusHttp');

function create(req, res) {
    if (req.body.nombre) {
        var rol = new Rol(req.body);
        rol.create().then(confirmacion => {
            if (confirmacion.rows[0].codigo == 0) {
                res.status(_http.OK).send(confirmacion.rows[0]);
            } else {
                res.status(_http.CREATED).send(confirmacion.rows[0]);
            }
        }).catch(error => res.status(_http.SERVER_ERROR).send({codigo: -1, error }));
    } else {
        res.status(_http.ERROR_SINTAXIS).send({codigo: 0, mensaje: 'Parámetros incorrectos' });
    }
}

function getAll(req, res) {
    var rol = new Rol();
    rol.getAll().then(roles => {
        if (roles.rowCount == 0) return res.status(_http.NO_CONTENT).send({codigo: 0, mensaje: 'No se encontraron Roles.' });
        return res.status(_http.OK).send({ roles: roles.rows });
    }).catch(error => res.status(_http.SERVER_ERROR).send({codigo: -1, error }));
}

function update(req, res) {
    if (req.body.nombre && req.body.id) {
        var rol = new Rol(req.body);
        rol.update().then(rol => {
            if (rol.rows[0].codigo == 0) {
                res.status(_http.OK).send(rol.rows[0]);
            } else {
                res.status(_http.CREATED).send(rol.rows[0]);
            }
        }).catch(error => res.status(_http.SERVER_ERROR).send({ error }));
    } else {
        res.status(_http.ERROR_SINTAXIS).send({codigo: 0, mensaje: 'Parámetros incorrectos' });
    }
}

function remove(req, res) {
    if (req.params.id) {
        var rol = new Rol(req.params);
        rol.delete().then(rol => {
            if (rol.rows[0].codigo == 0) {
                res.status(_http.OK).send(rol.rows[0]);
            } else {
                res.status(_http.CREATED).send(rol.rows[0]);
            }
        }).catch(error => res.status(_http.SERVER_ERROR).send({ error }));
    } else {
        res.status(_http.ERROR_SINTAXIS).send({codigo: 0, mensaje: 'Parámetros incorrectos' });
    }
}

module.exports = {
    create,
    getAll,
    update,
    remove
}