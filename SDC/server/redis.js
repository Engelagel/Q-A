const redis = require('redis');
const {Q, A} = require('../database/db.js');

const client = redis.createClient({host: '127.0.0.1', port: 6379});

client.on('error', (err) => console.log(err));


exports.redisTest = (req, res) => {
  client.get((err, result) => {
    res.send('getTest')
  })
}

//refactor to make it work. 
exports.redisGetQuestions = (req, res) => {
  client.get(req.params.product_id, async (err, result) => {
    if (result) {
      res.status(200).send(result)
    } else {
      try {
        let resultQ = await Q.find({product_id: req.params.product_id})
        for (let i = 0; i < resultQ.length; i++) {
          let resultA = await A.find({question_id: resultQ[i].question_id})
            for (j = 0; j < resultA.length; j++) {
              let answerId = resultA[j].answer_id;
              resultQ[i].answers[answerId]= {
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
        }
      } catch (err) {
        res.status(404).send(err)
      }
    }

  })
}