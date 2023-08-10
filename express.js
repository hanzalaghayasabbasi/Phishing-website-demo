const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(express.static(__dirname));

app.use(bodyParser.json()); // Parse JSON request body

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');// when user request it will send the html file
});

app.get('/styles.css', (req, res) => { // when user request it will send the css file
  res.sendFile(__dirname + '/StyleSheet.css');
});

app.get('/script.js', (req, res) => { // when user request it will send the javascript file
  res.sendFile(__dirname + '/javascript.js');
});


app.post("/", (req, res) => {
  const logText = JSON.stringify(req.body); // Convert the request body to a string
  fs.appendFile('request_logs.txt', logText + '\n', (err) => { //save password and user in file 
                                                   // if there is no file it will create (request_logs.txt) file
    if (err) {
      console.error('Error saving log:', err);
    }
  });
  res.send("POST request received"); // Send a response
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
