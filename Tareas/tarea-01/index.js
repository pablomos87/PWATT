const express = require("express");
const app = express();
const PORT = 8080; 


app.get("/", (req, res) => {
  console.log("Peticion bienvenida");
    const hourDate = new Date().getHours();

    
    if (hourDate >= 6 && hourDate < 12) {
      res.send("<h1 style=color:green> Buenos días! </h1>");
    } else if (hourDate >= 12 && hourDate < 18) {
      res.send("<h1 style=color:blue> Buenas tardes! </h1>");
    } else {
      res.send("<h1 style=color:red> Buenas noches! </h1>");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});