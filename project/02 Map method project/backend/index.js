const express = require('express');
const data = require('./model/data');
const app = express();
const port = 3050 || 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => { 
    res.render('index');
});

app.get('/data', (req, res) => {
    res.json(data); 
});

app.listen(port, () => console.log(`App listening on port ${port}!`));


