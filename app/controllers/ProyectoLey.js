const ProyectoLey = require('../models/ProyectoLey');
const _http = require('../shared/StatusHttp');

function getMisProyectoLey(req, res) {
    //console.log(req.query); //http:url.com/ruta?param1=1&param2=2

    if (req.query.idUsuario) {
        var proyectoLey = new ProyectoLey(req.query);
        proyectoLey.getMisProyectosLey().then(misPl => {
            if (misPl.rowCount == 0) return res.status(_http.NO_CONTENT).send({ codigo: 0, mensaje: 'No se encontraron Proyectos de Ley.' });
            return res.status(_http.OK).send({ proyectosLey: misPl.rows });
        }).catch(error => res.status(_http.SERVER_ERROR).send({ codigo: -1, error }));
    } else {
        res.status(_http.ERROR_SINTAXIS).send({ codigo: 0, mensaje: 'Parámetros incorrectos' });
    }
}

function create(req, res) {
    if (req.body.nombre || req.body.idUsuario || req.body.idCategoria) {
        var proyectoLey = new ProyectoLey(req.body);
        proyectoLey.create().then(confirmacion => {
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

module.exports = {
    getMisProyectoLey,
    create
}