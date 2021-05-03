// https://www.youtube.com/watch?v=Lr9WUkeYSA8&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=6

const express = require('express');
const _ = require("lodash");

const app = express();

// Lyssnar på porten 1717
app.listen(1717);



// ----------------- LABORATION 1 ---------------------

// Ger ett random tal mellan 0 och de ID man ger i URL:en
// https://lodash.com/docs/4.17.15#random
// https://stackoverflow.com/questions/42033209/how-to-get-id-from-url-as-variable-in-node-js
app.get("/api/custom_random/:id", (req, res) => {
  
  let id = req.params.id;
  res.send({ num: _.random(0, id) });
});


// Ger ett random tal mellan 0 - 1023
app.get("/api/random", (req, res) => {
  res.send({ num: _.random(0, 1023) });
});




// ----------------- LABORATION 2 ---------------------

// Räknare, lägger till 1 för varje request
let count = 0;
app.get("/api/count", (req, res) => {
  count++;
  res.send({ num: count });
});

// Nuvarande värde av count från räknaren
app.get("/api/count/status", (req, res) => {
  res.send({ count });
});