'use strict'

const express = require('express');
const bodyParse = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());
app.use(logger('dev'));

app.all((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE.OPTIONS');
  res.setHeader('Content-Type','application/json;  charset=utf-8');
  res.setHeader('x-ver','1.0');
  next();
});

app.get('/', (req, res) => {
  res.send('welcome to api');
});

app.use((req, res) => {
  res
    .status(404)
    .send({
      'error':{
        'error' : 'RequestNotFound',
        'message' : 'the path don´t exists, try another'
      }
    })
})


app.listen(4000, () => {
  console.log('Server listeng in port 4000');
})