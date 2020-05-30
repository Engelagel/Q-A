const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const {Q, A, Photo} = require('../database/db.js')
const faker = require('faker')
const port = 3004;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/../fec/dist'))

//get questions by product, get answers by question
app.get('/qa/:product_id', async (req, res) => { 
  try {
  let resultQ = await Q.find({product_id: req.params.product_id})
  for (let i = 0; i < resultQ.length; i++) {
    let resultA = await A.find({question_id: resultQ[i].question_id})

      for (j = 0; j < resultA.length; j++) {
        let answerId = resultA[j].answer_id;

        //refactor for photos
        resultQ[i].answers[answerId] = {
            id: answerId,
            body: resultA[j].body,
            date: resultA[j].date,
            answerer_name: resultA[j].answerer_name,
            helpfulness: resultA[j].helpfulness,
            photos: resultA[j].photos
        } 
      }

      
    let result = { 
      product_id: req.params.product_id, 
      results: resultQ, 
    }

      res.status(200).send(result);
  }
} catch (err) {
  res.status(404).send(err);
}
})

//gets all answers per question
app.get('/qa/:question_id/answers', async (req, res) => {
  try {
    let resultA = await A.find({question_id: req.params.question_id})
      for (let i = 0; i < resultA.length; i++) {
    
        let result = {
          question_id: resultA[i].question_id,
          page: 0,
          count: 0,
          results: resultA,
        }

        res.status(200).send(result)
      }
      
  } catch (err) {
    console.log(err)
    res.status(404).send(err)
  }
})





// //adds a question to a product
app.post('/qa/:product_id', (req, res) => {
  let newQuestion = new Q({
    product_id: req.params.product_id,
    question_id: 10000004,
    question_body: req.body.body,
    question_date: faker.date.recent(),
    asker_name: req.body.name,
    asker_email: req.body.email,
    question_helpfulness: 0,
    reported: 0,
  })
  newQuestion.save()
  res.status(201).send('created')
})

// //adds an answer to a question
app.post('/qa/:question_id/answers', (req, res) => {
  let newAnswer = new A({
    question_id: req.params.question_id,
    answer_id: 10000007,
    body: req.body.body,
    date: faker.date.recent(),
    answerer_name: req.body.name,
    answerer_email: req.body.email,
    helpfulness: 0,
    reported: 0,
    photos: [req.body.photos],
  })
  newAnswer.save();
  res.status(201).send('created')
})

app.put('/qa/question/:question_id/helpful', (req, res) => {
  let query = {question_id: req.params.question_id}
  let update = {$inc: {'question_helpfulness': 1}};
  Q.findOneAndUpdate(query, update, (err, data) => {
    if (err) {
      console.log(err)
    }
    res.status(204).send(data)
  })
})

app.put('/qa/question/:question_id/report', (req, res) => {
  let query = {question_id: req.params.question_id}
  let update = {$inc: {reported: 1}};
  Q.findOneAndUpdate(query, update, (err, data) => {
    if (err) {
      console.log(err)
    }
    res.status(204).send(data)
  })
})

app.put('/qa/answer/:answer_id/helpful', (req, res) => {
  let query = {answer_id: req.params.answer_id}
  let update = {$inc: {'helpfulness': 1}};
  A.findOneAndUpdate(query, update, (err, data) => {
    if (err) {
      console.log(err)
    }
    res.status(204).send(data)
  })
})

app.put('/qa/answer/:answer_id/report', (req, res) => {
  let query = {answer_id: req.params.answer_id}
  let update = {$inc: {'reported': 1}};
  let reportUpdate = A.findOneAndUpdate(query, update, (err, data) => {
    if (err) {
      console.log(err)
    }
    res.status(204).send(data)
  })
})
      
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});