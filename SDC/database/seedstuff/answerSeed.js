const faker = require('faker');
const db = require('../db.js');
const Promise = require('bluebird');

let answers = [];

const generateAnswers = new Promise((resolve, reject) => {
  let M = 100000
  let n = 0;
  while (n < M) {
    answers.push({
      question_id: faker.random.number((M * 2)),
      answer_id: faker.random.number((M * 2)),
      body: faker.random.words(35),
      date: faker.date.recent(),
      answerer_name: faker.internet.userName(),
      helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photos: [faker.random.number((M * 2))],
    })
    n++;
  }
})


const insertAnswer = () => {
  db.A.insertMany(answers, (err, docs) => {
    console.log(err || docs.length + 'answers saved')
  });
};

insertAnswer();

module.exports = insertAnswer;