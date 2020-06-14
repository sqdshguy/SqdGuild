const express = require('express'),
      app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Setup the port forwarding, please
app.listen(3000, () => {
  console.log('[Web] Ready!');
});
