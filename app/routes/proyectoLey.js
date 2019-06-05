const express = require('express');
const ProyectoLeyCtrl = require('../controllers/ProyectoLey');

const Router = express.Router();

Router.get('/misProyectoLey', ProyectoLeyCtrl.getMisProyectoLey)
    .post('/', ProyectoLeyCtrl.create);

module.exports = Router;