
let express = require('express');
let app = express();
let path = require('path');
let server = require('http').createServer(app);
let sock = require('socket.io')(server);
app.use(express.static(path.join(__dirname, 'projekt')));
app.set('views', path.join(__dirname, 'projekt'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/', (req, res)=>{
    res.render('index.html');
});
let messages = [];
sock.on('connection', socket => {
    socket.emit('previousMessages', messages);
    socket.on('sendMessage', data =>{
        messages.push(data);
        socket.broadcast.emit('receivedMessage', data);
    });
});
server.listen(3000);