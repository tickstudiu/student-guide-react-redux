const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(80);

console.log('Server Started!');

var hello = 'hello from server site';

app.get('/api/hello', (req, res) => {
    res.send(hello);
});