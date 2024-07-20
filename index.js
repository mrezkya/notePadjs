const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('server telah jalan di port 3000');
})