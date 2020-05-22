const faker = require('faker');

const qBody = () => {
  const length = Math.floor(Math.random() * 15 + 1)
  let body = '';

  for (let i = 0; i< length; i++) {
    body += faker.fake('{{lorem.sentence}}')
  }

  return body
}


const aBody = () => {
  const length = Math.floor(Math.random() * 100 + 1)
  let body = '';

  for (let i = 0; i< length; i++) {
    body += faker.fake('{{lorem.sentence}}')
  }

  return body
}

module.exports = 
  aBody,
  qBody