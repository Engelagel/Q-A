const faker = require('faker');
const fs = require('fs')
const { PerformanceObserver, performance} = require('perf_hooks');

let M = 10000000

//ANSWERS

//first run is 0-3000000
//second run is 3000001-6000000
//third run is 6000001-9000000
//fourth run is 9000001-10000000

const generateAnswers1 = () => {
  for (let i = 9000001; i <= 10000000; i++) {
    let answers = {
      question_id: faker.random.number((M * 2)),
      answer_id: faker.random.number((M * 2)),
      body: faker.random.words(35),
      date: faker.date.recent(),
      answerer_name: faker.internet.userName(),
      answerer_email: faker.internet.email(),
      helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photos: [{
        id: faker.random.number((M)),
        url: 'https://picsum.photos/200'
      },{
        id: faker.random.number((M)),
        url: 'https://picsum.photos/200'
      },{
        id: faker.random.number((M)),
        url: 'https://picsum.photos/200'
      },{
        id: faker.random.number((M)),
        url: 'https://picsum.photos/200'
      }],
    }

    if ( i % 1000 === 0) console.log(i)
    fs.writeFileSync('database/seedstuff/adatan1.json', JSON.stringify(answers), {flag: 'as'});

    // if (i % 1000 === 0) console.log(i , '1')
    // let fileWrite = (async () => {
    //   for (let j = 0; j < 1e7; j++) {
    //     if (!file.write('a')) {
    //       await new Promise(resolve => file.once('drain', resolve));
    //     }
    //   }
    // })
    
  }
}


const wrappedA1 = performance.timerify(generateAnswers1);


wrappedA1();





const observes = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);
  observes.disconnect();
});
observes.observe({ entryTypes: ['function'] });