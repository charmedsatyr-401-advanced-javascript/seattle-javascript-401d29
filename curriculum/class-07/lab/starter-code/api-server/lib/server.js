'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

let db = [];

app.use(express.json());

app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

app.get('/posts', (req,res,next) => {
  let count = db.length;
  let results = db;
  res.json({count,results});
});

app.get('/posts/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});


app.post('/posts', (req,res,next) => {
  let {name,author,title,article} = req.body;
  let record = {name,author,title,article};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

app.put('/posts/:id', (req,res,next) => {

});

app.delete('/posts/:id', (req,res,next) => {
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

