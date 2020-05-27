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
  question_helpfulness: Number,
  reported: Number,
}, {collection: 'question'});

let aSchema = new mongoose.Schema({
  question_id: Number,
  answer_id: Number,
  body: String,
  date: Date,
  answerer_name: String,
  helpfulness: Number,
  reported: Number,
  photos: [Number]
}, {collection: 'answer'})

let photoSchema = new mongoose.Schema({
  id: Number,
  url: String,
}, {collection: 'photo'})

const Q = mongoose.model('Q', qSchema, 'question');
const A = mongoose.model('A', aSchema);
const Photo = mongoose.model('photo', photoSchema);

// let Question = new mongoose.Schema({
//   url: String,
//   text: String,
//   id: Number
// })

// const question = mongoose.model('question', );


module.exports = {
  Q,
  A,
  Photo,
};