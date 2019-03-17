function limpiarBody(body) {
    Object.keys(body).forEach(element => {

        switch (typeof body[element]) {
            case 'string':
                body[element] ? body[element] = `'${body[element]}'` : null;
                console.log("String", body[element]);

                break;
            case 'number':
                body[element] ? body[element] : null;
                console.log("Number", body[element]);
                break;

            case 'boolean':
                body[element] ? (body[element] == true ? 1 : 0) : null;
                console.log("Boolean", body[element]);
                break;

            default:
                body[element] ? body[element] : null;
                console.log("Default", body[element]);
                break;
        }
    });
}

function string(string) {
    if (string) {
        return `'${string}'`;
    } else {
        return null;
    }
}

function number(number) {
    if (number) {
        return number;
    } else {
        return null;
    }
}

function boolean(boolean) {
    if (boolean) {
        return 1;
    } else {
        return 0;
    }
}

module.exports = {
    limpiarBody,
    string,
    number,
    boolean
}