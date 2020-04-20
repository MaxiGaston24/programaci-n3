//requerimos el framework
const express = require("express")

// Llamamos a su metodo
const app = express()

//asignamos puerto
app.listen('4000', () => {
    console.log('conexion en el puerto 4000')
})

//creamos al metodo http -> le asignamos una ruta y una funcion con (req, res) flecha como parametros 
app.get('/api-version', (req, res) => {
    res.send({
        author: "Maximiliano Bazan",
        version: "1.0",
        tech: "Framework Express"

    })
})