// process.env.PORT = 2332;

module.exports = {
    PORT: process.env.PORT || 3000, //En caso no exista la variable de entorno, la aplicacion se ejecutara en el puerto 3000
    
    //Credenciales BD
    USERDB: process.env.USERDB || 'admin_proyecta_peru',
    HOSTDB:  process.env.HOSTDB || 'localhost',
    DB: process.env.HOSTDB || 'db_proyecta_peru',
    PASSWORDDB: process.env.PASSWORDDB || 'Pr0y3Ct4DBp3rU',
    PORTDB: process.env.PORTDB || 5432,

    //Crear una clave secreta (JsonWebToken)
    SECRET_TOKEN: process.env.SECRET_TOKEN || 'Pr0y3ct4P3ruM1Ll4v3c1t4S3cr3t4'
}