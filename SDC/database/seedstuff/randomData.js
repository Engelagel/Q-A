const faker = require('faker');
const db = require('../db.js');
const body = require('./body.js')
const id = require('./id.js');
const photos = require('./photo.js');

const randomData = () => {
  let M = 10
  let n = 0;
  while (n < M) {
    const q = new db.Q ({
      product_id: faker.random.number((M / 2)),
      question_id: n,
      question_body: faker.random.words(25),
      question_date: faker.random.dateTimeBetween('-1 month', '+1 month'),
      asker_name:   faker.random.words(2),
      question_helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photo_id: faker.random.number((M * 2)),
    })

    const a = new db.A ({
      question_id: faker.random.number((M * 2)),
      answer_id: faker.random.number((M * 2)),
      body: faker.random.words(35),
      date: faker.random.dateTimeBetween('-1 month', '+1 month'),
      answerer_name: faker.random.words(2),
      helpfulness: faker.random.number(20),
      reported: faker.random.number(20),
      photos: [faker.random.number(15)],
    })

    const photo = new db.Photo ({
      id: faker.random.number((M * 2)),
      url: String,
    })
  }
}

module.export = randomData;