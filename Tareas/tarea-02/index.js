
const express = require ("express");
const path = require ("path");
const dotenv = require ("dotenv");
dotenv.config ();
const app = express ();
const PORT = process.env.PORT ||9000;


app.get ("/", (req, res, next) => {
    console.log("Ya lo leyó el middleware");
    next();
})
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded ({extended: true}))


app.get ("/", (req, res) => {
    console.log(process.env);
    res.sendFile (path.join (__dirname,"index.html"))
});

app.get ("/user", (req, res) => {
    console.log(process.env);
    res.sendFile (path.join(__dirname,"public", "user.html"))
});

app.get ("/error", (req, res) => {
    console.log(process.env);
    res.sendFile (path.join(__dirname,"public", "error.html"))
});

app.post ("/", (req, res) => {

    console.log(req.url);

    const { user , password } = req.body;

    console.log("=====================");
    
    console.log(user);
    console.log(password);    

    console.log("=====================");

    if (user === "juanperez" && password === "1234") {
    res.redirect ("/user")
    } else {
    res.redirect ("/error");
    }
    
})

app.listen (PORT, (err) => {
    if(err) console.log(err);
    console.log( (`Server is running at http://localhost:${PORT}`));
})


