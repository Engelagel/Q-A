const faker = require('faker');
const { PerformanceObserver, performance} = require('perf_hooks');

let answers = [];

const generateAnswers = () => {
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
}


const wrappedA = performance.timerify(generateAnswers);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });

wrapped();