var conexion = require('../db/conexionmysql.js')
var express = require('express')


var router = express()
//GET
router.get('/all', function (req, res) {
    let query = 'SELECT * FROM usuario'
    conexion.query(query, function (error, results, fields) {
        if (error){throw error}
        else{res.send(results)}
    });
});
router.get('/id/:id', function (req, res) {
    let idusuario = req.params.id
    let query = `SELECT * FROM usuario where idusuario =${idusuario}`
    conexion.query(query, function (error, results, fields) {
        if (error){throw error}
        else{res.send(results)}
    });
});
router.get('/identificador/:ident', function (req, res) {
    let identificador = req.params.ident
    let query = `SELECT * FROM usuario where identificadorusuario="${identificador}"`
    conexion.query(query, function (error, results, fields) {
        if (error){throw error}
        else{res.send(results)}
    });
});
//POST
router.post('/new',function(req,res){
    let idusuario = req.body.idusuario
    let identificadorusuario = req.body.identificadorusuario
    let fkusuariosala = req.body.fkusuariosala

    let query = "insert into usuario (idusuario,identificadorusuario,fkusuariosala) values (?,?,?)"
    conexion.query(query,[idusuario,identificadorusuario,fkusuariosala],function(error,results){
        if(error){throw error}
        else{
            res.status(200)
            res.send("usuario creado")
        }
    })
})
//PUT
router.put('/update',function(req,res){
    let idusuario = req.body.idusuario
    let identificadorusuario = req.body.codigousuario
    let fkusuariosala = req.body.fkusuariosala
    let query = `update usuario set identificadorusuario=${identificadorusuario},fkusuariosala=${fkusuariosala} where idusuario=${idusuario}`
    conexion.query(query,function(error,results){
        if(error){throw error}
        else{
            res.status(200)
            res.send("usuario actualizado")
        }
    })
})
//DELETE
router.delete('/delete/:id',function(req,res){
    let idusuario = req.params.id
    let query = `delete from usuario where idusuario = ${idusuario}`
    conexion.query(query,function(error,results){
        if(error){throw error}
        else{
            res.status(200)
            res.send("usuario eliminado")
        }
    })
})

module.exports=router;