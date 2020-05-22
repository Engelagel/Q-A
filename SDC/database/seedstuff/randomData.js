const faker = require('faker');
const db = require('../db.js');
const body = require('./body.js')

const randomData = () => {
  let M =  10;
  for (let i = 0; i <= M; i ++) {
    const q = new db.Q ({
      product_id: Number,
      question_id: i,
      question_body: body.qBody(),
      question_date: Date,
      asker_name: String,
      question_helpfulness: Number,
      reported: Number,
      photo_id: Number
    })
  }
}

module.export = randomData;