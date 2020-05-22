const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdc');

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
});

let aSchema = new mongoose.Schema({
  question_id: Number,
  answer_id: Number,
  body: String,
  date: Date,
  answerer_name: String,
  helpfulness: Number,
  reported: Number,
  photos: [Number]
})

let photoSchema = new mongoose.Schema({
  id: Number,
  url: String,
})

const Q = mongoose.model('Q', qSchema);
const A = mongoose.model('A', aSchema);
const photo = mongoose.model('photo', photoSchema);

module.exports = {
  Q,
  A,
  photo,
};