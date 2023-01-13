var conexion = require('../db/conexionmysql.js')
var express = require('express')


var router = express()
//GET
router.get('/all', function (req, res) {
    let query = 'SELECT * FROM sala'
    conexion.query(query, function (error, results, fields) {
        if (error){throw error}
        else{res.send(results)}
    });
});
router.get('/id/:idf', function (req, res) {
    let idsala = req.params.idf
    let query = `SELECT * FROM sala where idsala =${idsala}`
    conexion.query(query, function (error, results, fields) {
        if (error){throw error}
        else{res.send(results)}
    });
});
router.get('/codigosala/:codigos', function (req, res) {
    let codigosala = req.params.codigos
    let query = `SELECT * FROM sala where codigosala=${codigosala}`
    conexion.query(query, function (error, results, fields) {
        if (error){throw error}
        else{res.send(results)}
    });
});
//POST
router.post('/new',function(req,res){
    let idsala = req.body.idsala
    let codigosala = req.body.codigosala
    let query = "insert into sala (idsala,codigosala) values (?,?)"
    conexion.query(query,[idsala,codigosala],function(error,results){
        if(error){throw error}
        else{
            res.status(200)
            res.send("sala creada")
        }
    })
})
//PUT
router.put('/update',function(req,res){
    let idsala = req.body.idsala
    let codigosala = req.body.codigosala
    let query = `update sala set codigosala=${codigosala} where idsala=${idsala}`
    conexion.query(query,function(error,results){
        if(error){throw error}
        else{
            res.status(200)
            res.send("actualizado")
        }
    })
})
//DELETE
router.delete('/delete/:id',function(req,res){
    let idsala = req.params.id
    let query = `delete from sala where idsala = ${idsala}`
    conexion.query(query,function(error,results){
        if(error){throw error}
        else{
            res.status(200)
            res.send("eliminado")
        }
    })
})

module.exports=router;