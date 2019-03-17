const express = require('express');
const RolCtrl = require('../controllers/Rol');

const Router = express.Router();

Router.post('/', RolCtrl.create)
        .get('/', RolCtrl.getAll)
        .put('/', RolCtrl.update)
        .delete('/:id', RolCtrl.remove);

module.exports = Router;