const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.text());

const port = 3000;


const preWord = [{original: 'hello', backwards: 'olleh'}, {original: 'yes', backwards: 'sey'}]

server.get('/', (req, res) => res.send('Hello client!'))

server.get('/words', (req, res) => res.send(JSON.stringify({ preWord })))

server.post('/words', (req, res) => {
  const newWord = JSON.parse(req.body);
  preWord.push(newWord);
  res.send(JSON.stringify(newWord));
})

server.listen(port, () => console.log(`location: http://localhost:${port}`))
