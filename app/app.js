const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Auth = require('./routes/auth');
const Rol = require('./routes/rol');
const Usuario = require('./routes/usuario');
const ProyectoLey = require('./routes/proyectoLey');

const AuthToken = require('./middlewares/AuthToken');

App.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

App.use(AuthToken);

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false })); //Si queremos peticiones de formulario cambiarlo a true

App.use('/auth', Auth);
App.use('/rol', Rol);
App.use('/usuario', Usuario);
App.use('/proyectoLey', ProyectoLey);

module.exports = App;