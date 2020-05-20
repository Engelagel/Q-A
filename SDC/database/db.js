const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdc');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

let qaSchema = new mongoose.Schema({
    product_id: Number,
    results: [{
          question_id: Number,
          question_body: String,
          question_date: Date,
          asker_name: String,
          question_helpfulness: Number,
          reported: Number,
          answers: {
            68: {
              id: Number,
              body: String,
              date: Date,
              answerer_name: String,
              helpfulness: Number,
              photos: [String]
              // ...
            }
          }
        },
        {
          question_id: Number,
          question_body: String,
          question_date: Date,
          asker_name: String,
          question_helpfulness: Number,
          reported: Number,
          answers: {
            70: {
              id: Number,
              body: String,
              date: Date,
              answerer_name: String,
              helpfulness: Number,
              photos: [String],
            },
            78: {
              id: Number,
              body: String,
              date: Date,
              answerer_name: String,
              helpfulness: String,
              photos: [String],
            }
          }
        },
        // ...
    ]
});