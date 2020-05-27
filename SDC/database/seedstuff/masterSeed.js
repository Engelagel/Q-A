const faker = require('faker');
const fs = require('fs')
const db = require('../db.js');
const { PerformanceObserver, performance} = require('perf_hooks');
const file = require('fs').createWriteStream('database/seedstuff/adata1.json')

let M = 10000000;

//QUESTIONS
const generateQuestions1 = () => {
  for (let i = 0; i <= 10000000; i++) {
    questions1 = {
      product_id: faker.random.number(10000000),
      question_id: i,
      question_body: faker.random.words(25),
      question_date: faker.date.recent(),
      asker_name: faker.internet.userName(),
      question_helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photo_id: faker.random.number(10000000),
    }

      fs.writeFileSync('database/seedstuff/qdata1.json', JSON.stringify(questions1), {flag: 'as'});
        if ( i % 1000 === 0) console.log(i , '1')
  }
}

const generateQuestions2 = () => {
  for (let i = 4000001; i <= 8000000; i++) {
    questions2 = {
      product_id: faker.random.number(10000000),
      question_id: i,
      question_body: faker.random.words(25),
      question_date: faker.date.recent(),
      asker_name: faker.internet.userName(),
      question_helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photo_id: faker.random.number(10000000),
    }

      fs.writeFileSync('database/seedstuff/qdata2.json', JSON.stringify(questions2), {flag: 'as'});
        if ( i % 1000 === 0) console.log(i , '2')
  }
}

const generateQuestions3 = () => {
  for (let i = 8000001; i <= 10000000 ; i++) {
    questions3 = {
      product_id: faker.random.number(10000000),
      question_id: i,
      question_body: faker.random.words(25),
      question_date: faker.date.recent(),
      asker_name: faker.internet.userName(),
      question_helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photo_id: faker.random.number(10000000),
    }
      fs.writeFileSync('database/seedstuff/qdata3.json', JSON.stringify(questions3), {flag: 'as'});
        if (i % 1000 === 0) console.log(i , '3')
  }
}

const wrappedQ1 = performance.timerify(generateQuestions1);
const wrappedQ2 = performance.timerify(generateQuestions2);
const wrappedQ3 = performance.timerify(generateQuestions3);

// wrappedQ1();
// wrappedQ2();
// wrappedQ3();



//ANSWERS
const generateAnswers1 = () => {
  for (let i = 0; i <= 3000000; i++) {
    let answers = {
      question_id: faker.random.number((M * 2)),
      answer_id: faker.random.number((M * 2)),
      body: faker.random.words(35),
      date: faker.date.recent(),
      answerer_name: faker.internet.userName(),
      helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photos: [faker.random.number(M), faker.random.number(M), faker.random.number(M), faker.random.number(M), faker.random.number(M), faker.random.number(M)],
    }

    if ( i % 1000 === 0) console.log(i)
    fs.writeFileSync('database/seedstuff/adata1.json', JSON.stringify(answers), {flag: 'as'});

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

const generateAnswers2 = () => {
  for (let i = 3000001; i <=6000000; i++) {
    let answers = {
      question_id: faker.random.number((M * 2)),
      answer_id: faker.random.number((M * 2)),
      body: faker.random.words(35),
      date: faker.date.recent(),
      answerer_name: faker.internet.userName(),
      helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photos: [faker.random.number(M), faker.random.number(M), faker.random.number(M), faker.random.number(M), faker.random.number(M), faker.random.number(M)],
    }
    if ( i % 1000 === 0) console.log(i)
    fs.writeFileSync('database/seedstuff/adata2.json', JSON.stringify(answers), {flag: 'as'});
  }
}

const generateAnswers3 = () => {
  for (let i = 6000001; i <= 9000000; i++) {
    let answers = {
      question_id: faker.random.number((M * 2)),
      answer_id: faker.random.number((M * 2)),
      body: faker.random.words(35),
      date: faker.date.recent(),
      answerer_name: faker.internet.userName(),
      helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photos: [faker.random.number(M), faker.random.number(M), faker.random.number(M), faker.random.number(M), faker.random.number(M), faker.random.number(M)],
    }
    if ( i % 1000 === 0) console.log(i)
    fs.writeFileSync('database/seedstuff/adata3.json', JSON.stringify(answers), {flag: 'as'});
  }
}

const generateAnswers4 = () => {
  for (let i = 9000001; i <= 10000000; i++) {
    let answers = {
      question_id: faker.random.number((M * 2)),
      answer_id: faker.random.number((M * 2)),
      body: faker.random.words(35),
      date: faker.date.recent(),
      answerer_name: faker.internet.userName(),
      helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photos: [faker.random.number(M), faker.random.number(M), faker.random.number(M), faker.random.number(M), faker.random.number(M), faker.random.number(M)],
    }
    if ( i % 1000 === 0) console.log(i)
    fs.writeFileSync('database/seedstuff/adata3.json', JSON.stringify(answers), {flag: 'as'});
  }
}

const wrappedA1 = performance.timerify(generateAnswers1);
const wrappedA2 = performance.timerify(generateAnswers2);
const wrappedA3 = performance.timerify(generateAnswers3);
const wrappedA4 = performance.timerify(generateAnswers4);

wrappedA1();
// wrappedA2(); 
// wrappedA3();
// wrappedA4();




//PHOTOS
const generatePhotos1 = () => {
  for (let i = 0; i <= 10000000; i++) {
    let photos = {
      id: faker.random.number((M)),
      url: 'https://picsum.photos/200',
    }

    if ( i % 1000 === 0) console.log(i)
      fs.writeFileSync('database/seedstuff/pdata3.json', JSON.stringify(photos), {flag: 'as'});
  }
}

const wrappedP1 = performance.timerify(generatePhotos1);


// wrappedP1();





const observes = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);
  observes.disconnect();
});
observes.observe({ entryTypes: ['function'] });