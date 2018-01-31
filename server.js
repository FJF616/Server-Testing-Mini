const express =  require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = 3000;
const server = express();

server.use(morgan('combined'));
server.use(bodyParser.json());
server.listen(port, () =>{
  console.log(`server running on ${port}`);
})
server.get('/', (req, res) => {
  res.send(req.body);
});
module.exports = server;

