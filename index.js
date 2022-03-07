const http = require('http')
const express = require('express');
const morgan = require ('morgan');
const expressEjsLayout = require('express-ejs-layouts');

const hostname = "localhost"
const port = 3000;


//Intanciar express
const app = express()

app.use(morgan('combined')) 

// Utilizar las rutas de Express Router
const r1 = require('./routes/usuarioRutas')
app.use('/', r1)

/* EJS */
app.set('view engine','ejs');
app.set('layout', '../layouts/Espectador');
app.use(expressEjsLayout);

//Definir servidor
const server = http.createServer(app)

//Archivo estatico
app.use(express.static(__dirname + "/public"))

//Arrancar servidor
server.listen(port, hostname, () => {
  console.log("Servidor iniciado...")
})