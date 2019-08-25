const express = require('express');
const app = express();


app.use(express.static('public'));


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


const listener = app.listen(process.env.PORT, function() {
  console.log('sqd is listening for requests on port ' + listener.address().port);
});
