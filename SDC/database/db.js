const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdc', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

let qSchema = new mongoose.Schema({
  product_id: Number,
  question_id: Number,
  question_body: String,
  question_date: Date,
  asker_name: String,
  asker_email: String,
  question_helpfulness: Number,
  reported: Number,
  answers: {},
}, {collection: 'question'});

let aSchema = new mongoose.Schema({
  question_id: Number,
  answer_id: Number,
  body: String,
  date: Date,
  answerer_name: String,
  answerer_email: String,
  helpfulness: Number,
  reported: Number,
  photos: [Number]
}, {collection: 'answer'})

const Q = mongoose.model('Q', qSchema, 'question');
const A = mongoose.model('A', aSchema);

module.exports = {
  Q,
  A,
};