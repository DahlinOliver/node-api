// https://www.youtube.com/watch?v=Lr9WUkeYSA8&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=6

const express = require('express');
const _ = require("lodash");

const app = express();

// Lyssnar på porten 1717
app.listen(1717);
app.use(express.json())

app.use(express.static('public'))



// ----------------- LABORATION 1 ---------------------

// Ger ett random tal mellan 0 och de ID man ger i URL:en
// https://lodash.com/docs/4.17.15#random
// https://stackoverflow.com/questions/42033209/how-to-get-id-from-url-as-variable-in-node-js
app.get("/api/custom_random/:num", (req, res) => {
  // /api/custom_random/hej
  let id = req.params.num;
  res.send({ num: _.random(0, id) });
});

// Ger ett random tal mellan 0 - 1023
app.get("/api/random", (req, res) => {
  res.send({ num: _.random(0, 1023) });
});

// https://www.w3resource.com/javascript-exercises/javascript-function-exercise-7.php
app.get('/api/vowels/:word', (req, res) => {
	//let id = req.params.word;
	let { word } = req.params
	function vowel_count(string) {
		//var vowel_list = 'aeiouåäöAEIOUÅÄÖ'
		var vcount = 0

		for (var i = 0; i < string.length; i++) {
			if ('aeiouåäöAEIOUÅÄÖ'.includes(string[i])) {
			//if (vowel_list.indexOf(string[i]) !== -1) {
				
				vcount += 1
			}
		}
		return vcount
	}
	res.send({ vowels: vowel_count(word) })
});



// ----------------- LABORATION 2 ---------------------

// Räknare, lägger till 1 för varje request
let count = 0;
app.get("/api/count/add", (req, res) => {
  count++;
  res.send({ success: true });
});

// Nuvarande värde av count från räknaren
app.get("/api/count/show", (req, res) => {
  res.send({ count });
});