const faker = require('faker');
const db = require('../db.js');
const Promise = require('bluebird');

let questions = [];

const generateQuestions = new Promise((resolve, reject) => {
  let M = 100000
  let n = 0;
  while (n < M) {
    questions.push({
      product_id: faker.random.number((M / 2)),
      question_id: n,
      question_body: faker.random.words(25),
      question_date: faker.date.recent(),
      asker_name: faker.internet.userName(),
      question_helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photo_id: faker.random.number((M * 2)),
    })
    n++;
  }
})

const insertQuestion = () => {
  db.Q.insertMany(questions, (err, docs) => {
    console.log(err || docs.length + ' questions saved')
  });
};

insertQuestion();

module.exports = insertQuestion;