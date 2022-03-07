const models = require('./models')
const usr = models.pregunta

/*******************************
SELECT ALL
 ***************************/

const consulta = () => {
    console.log("====> Inicio de select ...")


    usr.findAll()
        .then((lusr) => {
            console.log("Recuperando datos")
            lusr.forEach(element => { 
                jsonObject = element.get({raw:true})
                console.log(jsonObject)

            })
        })
        .catch((err) => {
            console.log("Ocurrio un error"+err)
        })
    console.log("====>Fin de Select...")
    
}

const ejem2 = setTimeout(consulta, 2000)