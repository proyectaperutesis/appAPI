const Usuario = require('../models/Usuario');
const _http = require('../shared/StatusHttp');

function create(req, res) {
    if (req.body.dni && req.body.nombre && req.body.apellidoPaterno && req.body.apellidoMaterno &&
        req.body.email && req.body.password && req.body.fhNacimiento && req.body.idRol) {

        var usuario = new Usuario(req.body);
        usuario.create().then(confirmacion => {
            if (confirmacion.rows[0].codigo == 0) {
                res.status(_http.OK).send(confirmacion.rows[0]);
            } else {
                res.status(_http.CREATED).send(confirmacion.rows[0]);
            }
        }).catch(error => res.status(_http.SERVER_ERROR).send({ codigo: -1, error }));
    } else {
        res.status(_http.ERROR_SINTAXIS).send({ codigo: 0, mensaje: 'Parámetros incorrectos' });
    }
}

function getAll(req, res) {
    var usuario = new Usuario(req.body);
    usuario.getAll().then(usuarios => {
        if (usuarios.rowCount == 0) return res.status(_http.NO_CONTENT).send({ mensaje: 'No se encontraron Usuarios.' });
        return res.status(_http.OK).send({ usuarios: usuarios.rows });
    }).catch(error => res.status(_http.SERVER_ERROR).send({ error }));
}

module.exports = {
    create,
    getAll
}