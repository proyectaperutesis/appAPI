const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config');

module.exports = function (req, res, next) {
    // if (req.path != '/auth/login') {
        console.log("authorization: " + req.headers.authorization);
        
        // if (req.headers.authorization) {
        //     let token = req.headers.authorization.split(' ')[1];

        //     jwt.verify(token, CONFIG.SECRET_TOKEN, function (error, payload) {
        //         if (error) {
        //             return res.status(403).send({ message: 'No tiene los permisos suficientes para acceder al API', error });
        //         } else {
        //             //Se puede agregar validacion para los roles
        //             next();
        //         }
        //     });
        // } else res.status(403).send({ message: "No tiene los permisos suficientes para acceder al API" });
    // } else next();
    next();
}

//Agregar en la cabecera:
//  Bearer 'token'