const express = require('express');
const app = express();
const morgan = require('morgan');
const pug = require('pug');

app.use(express.json());
app.use(express.static('./public'));
app.use(morgan('dev'));

module.exports = app;
