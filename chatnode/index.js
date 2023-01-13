const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const cors = require("cors");
app.use(cors());

const server = require('http').Server(app)
const PORT = 3000

server.listen(PORT,()=>{
    console.log(`Escuchando puerto --> ${PORT}`);
})
const options = {
    cors:{
        origin:'http://localhost:4200'
    }
}
const io = require('socket.io')(server,options)

io.on('connection', (socket)=>{
    const codigoChat = socket.handshake.query.codigoChat
    console.log(`ID USUARIO: ${socket.id} | CODIGO CHAT: ${codigoChat}`);
    socket.join(codigoChat)
    socket.on('message',(res)=>{
        console.log(res);
        socket.to(codigoChat).emit('message',res)
        socket.emit('message',res)
    })

})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Routes
app.use('/sala',require('./routes/sala'))
app.use('/usuario',require('./routes/usuario'))
app.use('/mensaje',require('./routes/mensaje'))


