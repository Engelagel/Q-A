const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const {Q, A, Photo} = require('../database/db.js')
const { getQuestions } = require('./queries.js');
const port = 3004;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/../fec/dist'))

app.get('/qa/:product_id', async (req, res) => { 
  try {
  let result = await Q.find({product_id: req.params.product_id})
  res.status(200).send(result);
} catch (err) {
  res.status(404).send(err);
}
})

// app.get('/qa', (req, res) => {
//   res.status(200).send('GET get questions per product with answers qa/:question_id/answers')
// })

// app.post('/qa', (req, res) => {
//   res.status(200).send('POST adds a question to product req.body = qbody, qname, qname"s email qemail/qa/:product_id')
// })

// app.post('/qa', (req, res) => {
//   res.status(200).send('POST adds a answer to product req.body = abody, aname, aname"s email, aphoto qemail/qa/:question_id/answers')
// })

// app.put('/qa', (req, res) => {
//   res.status(200).send('PUT update a question to show it was helpful /qa/question/:question_id/helpful')
// })

// app.put('/qa', (req, res) => {
//   res.status(200).send('PUT update a question to show it was reported /qa/question/:question_id/report')
// })

// app.put('/qa', (req, res) => {
//   res.status(200).send('PUT update a answer to show it was helpful /qa/answer/:answer_id/helpful')
// })

// app.put('/qa', (req, res) => {
//   res.status(200).send('PUT update a answer to show it was reported /qa/answer/:answer_id/report')
// })
      
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});