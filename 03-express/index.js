//1. Importamos la libreria de express

const express = require("express");

//instalamos dotenv para las variables del entorno Node
//importamos dotenv

const dotenv = require ("dotenv");

//ejecuto la libreria

const path = require ("path");

dotenv.config(); 

//o

/* require("dotenv").config(); */


//2. Ejecutamos las funcionalidades de express

const app =  express ();

//3. Creamos un puerto para que el servidor escuche las peticiones

const PORT = process.env.PORT || 9000;

/* PORT = process.env.PORT ?? 9000; */


//3306: SQL;
//300: React;
//4200: Angular;
//8080: (tomcat)JAVA:
//9000: Sprint Boot
//57..: Vite;
//27108: MongoDB;

// 4. Creamos una ruta para que el cliente pueda realizar peticiones

//Parámetros 1. Ruta 2. Función de callback

app.get ("/saludo", (request, response) => {
    console.log(request);
    console.log("====================");
    console.log(request.url);
    console.log("====================");
    console.log("Este es mi primer servidor backend");
    console.log("====================");
    response.end ("Hola! Este es mi primer servidor backend con Express.");
    console.log("====================");
    console.log(process.env);

}
);

//Enviamos una respuesta con un elmento html
app.get ("/send", (req, res) => {
    console.log("Peticion a /send");
    res.send ("<h1 style=color:red> Bienvenido a la App de Express </h1>");
})
//Enviamos una respuesta con un dato tipo json
app.get ("/json", (req, res) => {
    console.log("Peticion a /json");
res.status(200) .json ({
    Respuesta: "Es una respuesta en formato JSON - Todo Ok"})
      })

// Damos la opción  de descargar archivos al usuario
      app.get ("/descargas", (req, res) => {
        console.log("Descargas listas");
    res.status(200) .download ("./archivos/descargas.txt")
          })

// Respondemos con un archivo html

app.get ("/", (req, res) => {
    console.log("Enviamos un archivo html");
    var options = {
        root: path.join(__dirname, 'public'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    }
res.status(200) .sendFile("index.html", options);
      })
    



// 5. Ponemos a la escucha a nuestro servidor 

app.listen (PORT, (err)=>{

    if (err) { throw err }

    console.log("Servidor escuchando en el puerto http://localhost:${PORT}" );
})