const express = require('express');
const _ = require("lodash");

const app = express();

// Lyssnar på porten 1717
app.listen(1717);



// ----------------- LABORATION 1 ---------------------

// Custom Random
app.get("/api/custom_random/:id", (req, res) => {
  //res.send() returnerar JSON automatiskt om ett objekt skickas med
  //params.id returnerar vad användaren har skrivit in som endpoint
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