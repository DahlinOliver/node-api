const http = require('http');
const port = 1717;

const server = http.createServer(function(req, res) {

})

server.listen(port, function(error) {
if (error) {
    console.log('Something went wrong', error)
} else {
    console.log('Server is listening on port: ' + port)
}
})

server.get("/api/custom_random/:id", (req, res) => {
  //res.send() returnerar JSON automatiskt om ett objekt skickas med
  //params.id returnerar vad användaren har skrivit in som endpoint
  let id = req.params.id;
  res.send({ num: _.random(0, id) });
});