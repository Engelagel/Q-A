const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdc');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


let questionSchema = new mongoose.Schema({
    product_id: Number,
    results: [{
          question_id: Number,
          question_body: String,
          question_date: Date,
          asker_name: String,
          question_helpfulness: Number,
          reported: Number,
          answers: {
            autoIncreNum: {
              id: Number,
              body: String,
              date: Date,
              answerer_name: String,
              helpfulness: Number,
              photos: [{
                id: Number,
                url: String
              }]
            }
          }
        }
    ]
});

let answerSchema = new mongoose.Schema({
    question: Number,
    page: Number,
    count: Number,
    results: [
      {
        answer_id: Number,
        body: String,
        date: Date,
        answerer_name: String,
        helpfulness: Number,
        photos: [{
            id: Number,
            url: String
          }]
      }
    ]
})
