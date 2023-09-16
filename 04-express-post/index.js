
const express = require ("express");
const path = require ("path");
const dotenv = require ("dotenv");
dotenv.config ();
const cors = require ("cors");
const app = express ();
const PORT = process.env.PORT ||9000;

//Middleware

app.get ("/", (req, res, next) => {
    console.log("Ya lo leyó el middleware");


    next();

})

//Middleware de Express


app.use(express.static(path.join(__dirname, 'public')));
//o app.use(express.static('public'),
app.use(express.json());
app.use(express.urlencoded ({extended: true}))
app.use(cors());

app.get ("/login", (req, res) => {

    console.log(path.join(__dirname, 'public'),);
    console.log(process.env);

    res.send ("Hello World")
});

app.get ("/", (req, res) => {
    console.log(process.env);

    res.sendFile ("index.html")
});

app.post ("/", (req, res) => {

    //divido el body en sus elementos

    console.log(req.url);

    const { nombre , apellido } = req.body;

    console.log("=====================");
    
    console.log(nombre);
    console.log(apellido);    

    console.log("=====================");

    let datoNombre = req.body.nombre;
    let datoApellido = req.body.apellido;

    console.log("=====================");

    console.log(datoNombre);
    console.log(datoApellido);
    
    console.log("=====================");

    res.send (`Hemos recibido tus datos ${nombre} - ${apellido}`)



})

app.listen (PORT, (err) => {
    if(err) console.log(err);
    console.log( (`Server is running at http://localhost:${PORT}`));
})


