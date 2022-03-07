Nombre = "a";

const express = require("express")
const bodyParser = require("body-parser")
const rutas = express.Router()

// Multer
const multer = require('multer')
const par = multer()
 
// Parsing de lo datos
rutas.use( express.urlencoded( {extended : true}) )
rutas.use( express.json() )
rutas.use( par.array() )

  //------------------------------------------------------------------------
  //------------------------------------------------------------------------

rutas.post('/principal', (req,res) => {
    console.log(Nombre);
    Nombre = req.body.nombre;
    res.render('PaginaInicio', {layout:'/layouts/',p1: Nombre})
    console.log(Nombre);
})
  

module.exports = rutas