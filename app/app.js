const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Rol = require('./routes/rol');
const Usuario = require('./routes/usuario');
const Auth = require('./routes/auth');

const AuthToken = require('./middlewares/AuthToken');

App.use(AuthToken);

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false})); //Si queremos peticiones de formulario cambiarlo a true

App.use('/rol', Rol);
App.use('/usuario', Usuario);
App.use('/auth', Auth);

module.exports = App;