const express = require('express');
const UsuarioCtrl = require('../controllers/Usuario');

const Router = express.Router();

Router.post('/', UsuarioCtrl.create)
        .get('/', UsuarioCtrl.getAll);

module.exports = Router;