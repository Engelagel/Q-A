const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3004;

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// app.use(cors());


app.get('/qa', (req, res) => {
  res.status(200).send('GET all')
})

app.get('/qa', (req, res) => {
  res.status(200).send('GET one')
})

app.post('/qa', (req, res) => {
  res.status(200).send('POST')
})


app.put('/qa', (req, res) => {
  res.status(200).send('PUT')
})


app.delete('/qa', (req, res) => {
  res.status(200).send('DELETE')
})
      
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});