module.exports = {
    OK: 200, //Cuando la petición se ha realizado correctamente
    CREATED: 201, //Cuando se crea un nuevo recurso como resultado de la petición
    NO_CONTENT: 204, //Cuando la respuesta no tiene ningun contenido
    ERROR_SINTAXIS: 400, //Cuando el cliente no ingresa todos los datos solicitados
    NO_AUTORIZADO: 401, //Cuando necesita autentificación
    NOT_FOUND: 404, //Cuando no se pudo encontrar el recurso solicitado
    SERVER_ERROR: 500 //Cuando se haya generado un error en el sistema
}