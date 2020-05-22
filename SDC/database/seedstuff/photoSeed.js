const faker = require('faker');
const db = require('../db.js');
const Promise = require('bluebird');


let photos = [];

const generatePhotos = new Promise((resolve, reject) => {
  let M = 10
  let n = 0;
  while (n < M) {
    photos.push({
      id: faker.random.number((M * 2)),
      url: String,
    })
    n++;
  }
})

const insertPhoto = () => {
  db.Photo.insertMany(photos, (err, docs) => {
    console.log(err || docs.length + 'photos saved')
  });
};

insertPhoto();