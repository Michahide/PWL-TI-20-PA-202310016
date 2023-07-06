const express = require('express');
const app = express();
app.use(express.static(__dirname));

const http = require('http').Server(app);
const io = require('socket.io')(http);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


io.on('connection', () => {
  console.log('a user connected');
});
const server = http.listen(3000, () => {
  const { port } = server.address();
  console.log(`Listening on port ${port}`);
});

const messages = [
    // {name:"Tim",message:"yo"},
    // {name:"Pam",message:"hi"}
]

// GET MESSAGE
app.get('/messages', (req, res) => {
    res.send(messages);
});

app.post('/message', (req, res) => {
    messages.push(req.body);
    io.emit('message', req.body);
    res.sendStatus(200);
});