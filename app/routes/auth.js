const express = require('express');
const AuthCtrl = require('../controllers/Auth');
const Router = express.Router();

Router.post('/login', AuthCtrl);

module.exports = Router;