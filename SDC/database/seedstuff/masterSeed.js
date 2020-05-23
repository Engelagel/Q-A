const faker = require('faker');
const fs = require('fs')
const db = require('../db.js');
const { PerformanceObserver, performance} = require('perf_hooks');

let M = 100000

const generateQuestions = () => {
  
  let photos = [];
  let questions = [];
 
  for (let i = 0; i <= M; i++) {
    questions.push({
      product_id: faker.random.number((M / 2)),
      question_id: i,
      question_body: faker.random.words(25),
      question_date: faker.date.recent(),
      asker_name: faker.internet.userName(),
      question_helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photo_id: faker.random.number((M * 2)),
    })


    fs.writeFileSync('database/seedstuff/data.json', JSON.stringify(questions), {flag: 'as'});
    if ( i % 1000 === 0) console.log(i)
  }
}

getAnswers = () => {
  let answers = [];
  for (let i = 0; i <= M; i++) {
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

    fs.writeFileSync('database/seedstuff/data.json', JSON.stringify(answers), {flag: 'as'});
    if ( i % 1000 === 0) console.log(i)

  }
}

const getPhotos = () => {
  let answers = [];
  for (let i = 0; i <= M; i++) {
    photos.push({
      id: faker.random.number((M * 2)),
      url: faker.random.word(),
    })

    fs.writeFileSync('database/seedstuff/data.json', JSON.stringify(photos), {flag: 'as'});
    if ( i % 1000 === 0) console.log(i)

  }
}

const wrapped = performance.timerify(generateQuestions);
// const wrappedA = performance.timerify(generateAnswers);
// const wrappedP = performance.timerify(generatePhotos);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });

wrapped();
// wrappedA();
// wrappedP();