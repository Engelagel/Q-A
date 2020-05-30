const faker = require('faker');
const fs = require('fs')
const { PerformanceObserver, performance} = require('perf_hooks');


//QUESTIONS

//first run is 0-4000000
//second run is 4000001- 8000000
//third run is 8000001-10000000 

const generateQuestions = () => {
  for (let i = 0; i <= 4000000; i++) {
    questions1 = {
      product_id: faker.random.number(10000000),
      question_id: i,
      question_body: faker.random.words(25),
      question_date: faker.date.recent(),
      asker_name: faker.internet.userName(),
      asker_email: faker.internet.email(),
      question_helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      answers: {}
    }

      fs.writeFileSync('database/seedstuff/qdatan1.json', JSON.stringify(questions1), {flag: 'as'});
        if ( i % 1000 === 0) console.log(i , '1')
  }
}


const wrapped = performance.timerify(generateQuestions);


wrapped();


const observes = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);
  observes.disconnect();
});
observes.observe({ entryTypes: ['function'] });