//traemos un modulo nativo de node para crear un servidor

const http = require ("http");

//creamos un servidor: recibe peticiones y responde con recursos

const servidor = http.createServer((peticion, respuesta) => {
    //respuesta.end ("Este es mi primer servidor backend")
    console.log("==============================");

    //imprimo la petición
    console.log(peticion);
    console.log("==============================");
    console.log(peticion.url);
    console.log("==============================");
    console.log(peticion.headers);
    console.log("==============================");
    console.log(peticion.method);

    if (peticion.url == "/") {
         respuesta.endd ("Este es mi primer servidor backend")
    } else if (peticion.url == "/formulario") {
    respuesta.end("Te estamos enviando el formulario")
    }
     else (
        respuesta.end ("No encontramos la Ruta")
        )
});

// un numero para comunicarme con el servidor
PORT = 8080;

//Levantamos el servidor / app backend

servidor.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto http://localhost:${PORT}");
})

