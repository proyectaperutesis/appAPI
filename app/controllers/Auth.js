const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const CONFIG = require('../config/config');
const _http = require('../shared/StatusHttp');

const jwt = require('jsonwebtoken');

function login(req, res) {
    if(req.body.username || req.body.password){
        var usuario = new Usuario(req.body);
        usuario.login().then(usuario => {
            if (usuario.rowCount == 0) {
                res.status(_http.NOT_FOUND).send({codigo: 0, mensaje: 'El usuario no existe.' })
            } else {
                bcrypt.compare(req.body.password, usuario.rows[0].password).then(match => {
                    if(match){
                        payload = {
                            username: usuario.rows[0].username,
                            nombre: usuario.rows[0].nombre,
                            apellidopaterno: usuario.rows[0].apellidopaterno,
                            apellidomaterno: usuario.rows[0].apellidomaterno,
                            idrol: usuario.rows[0].idrol
                        }

                        jwt.sign(payload, CONFIG.SECRET_TOKEN, function(error, token) {
                            if(error){
                                res.status(_http.SERVER_ERROR).send({codigo: -1, error});
                            }else{
                                res.status(_http.OK).send({codigo: 1, message: 'Acceso', token});
                            }
                        });
                    }else{
                        res.status(_http.OK).send({codigo:0, message: 'El password es incorrecto.' });
                    }
                }).catch(error => res.status(_http.SERVER_ERROR).send({ codigo: -1, error }));
            }
        }).catch(error => res.status(_http.SERVER_ERROR).send({ error }));
    }else{
        res.status(_http.ERROR_SINTAXIS).send({codigo: 0, mensaje: 'Parámetros incorrectos' });
    }
}

module.exports = login;