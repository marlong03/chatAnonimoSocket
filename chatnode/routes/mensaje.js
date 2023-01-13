var conexion = require('../db/conexionmysql.js')
var express = require('express')

var router = express()
//GET
router.get('/all', function (req, res) {
    let query = 'SELECT * FROM mensaje'
    conexion.query(query, function (error, results, fields) {
        if (error){throw error}
        else{res.send(results)}
    });
});
router.get('/id/:idf', function (req, res) {
    let idmensaje = req.params.idf
    let query = `SELECT * FROM mensaje where idmensaje=${idmensaje}`
    conexion.query(query, function (error, results, fields) {
        if (error){throw error}
        else{res.send(results)}
    });
});
/* router.get('/codigomensaje/:codigomensaje', function (req, res) {
    let codigomensaje = req.params.codigomensaje
    let query = `SELECT * FROM mensaje where codigomensaje =${codigomensaje}`
    conexion.query(query, function (error, results, fields) {
        if (error){throw error}
        else{res.send(results)}
    });
}); */
router.get('/mensajessala/:idsala', function (req, res) {
    let idsala = req.params.idsala
    let query = `SELECT * FROM mensaje where fksalamensaje =${idsala}`
    conexion.query(query, function (error, results, fields) {
        if (error){throw error}
        else{res.send(results)}
    });
});
//POST
router.post('/new',function(req,res){
    let idmensaje = req.body.idmensaje
    let datamensaje = req.body.datamensaje
    let fksalamensaje = req.body.fksalamensaje
    let fkusuariomensaje = req.body.fkusuariomensaje
    let query = "insert into mensaje (idmensaje,datamensaje,fksalamensaje,fkusuariomensaje) values (?,?,?,?)"
    conexion.query(query,[idmensaje,datamensaje,fksalamensaje,fkusuariomensaje],function(error,results){
        if(error){res.status(500)}
        else{
            res.send("mensaje creado")
        }
    })
})
//PUT
router.put('/update',function(req,res){
    
    let idmensaje = req.body.idmensaje
    let datamensaje = req.body.datamensaje
    let fksalamensaje = req.body.fksalamensaje
    let fkusuariomensaje = req.body.fkusuariomensaje
    let  query = `update mensaje set datamensaje=${datamensaje},fksalamensaje=${fksalamensaje},fkusuariomensaje=${fkusuariomensaje} where idmensaje=${idmensaje}`
    conexion.query(query,function(error,results){
        if(error){throw error}
        else{
            res.status(200)
            res.send("mensaje actualizado")
        }
    })
})
//DELETE
router.delete('/delete/:id',function(req,res){
    let idmensaje = req.params.id
    let query = `delete from mensaje where idmensaje = ${idmensaje}`
    conexion.query(query,function(error,results){
        if(error){throw error}
        else{
            res.status(200)
            res.send("eliminado")
        }
    })
})

module.exports=router;