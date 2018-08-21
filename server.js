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

var list = [
    {id: 1, title: 'Peer assessment workshop (Susan)', subTitle: 'Psychology in Cinema.'},
    {id: 2, title: 'Choice Health and Safety', subTitle: 'Workplace induction'},
    {id: 3, title: 'Expected completion', subTitle: 'Resume Writing.'}
    ];

app.get('/api/hello', (req, res) => {
    res.send(hello);
});

app.get('/api/student/overview/today', (req, res) => {
    res.send(list);
});