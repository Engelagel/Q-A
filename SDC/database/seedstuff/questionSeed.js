const faker = require('faker');
const fs = require('fs')
const { PerformanceObserver, performance} = require('perf_hooks');



const generateSeed = () => {
  let answers = [];
  let photos = [];
  let questions = [];
 
  let M = 10000000
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

    photos.push({
      id: faker.random.number((M * 2)),
      url: faker.random.word(),
    })

    fs.writeFileSync('database/data.json', JSON.stringify(questions), {flag: 'as'});
    if ( i % 1000 === 0) console.log(i)

    fs.writeFileSync('database/data.json', JSON.stringify(answers), {flag: 'as'});
    if ( i % 1000 === 0) console.log(i)

    fs.writeFileSync('database/data.json', JSON.stringify(photos), {flag: 'as'});
    if ( i % 1000 === 0) console.log(i)
  }
}

const wrapped = performance.timerify(generateSeed);
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