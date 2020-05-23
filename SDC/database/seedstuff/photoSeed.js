const faker = require('faker');
const { PerformanceObserver, performance} = require('perf_hooks');


let photos = [];

const generatePhotos = () => {
  let M = 100000
  let n = 0;
  while (n < M) {
    photos.push({
      id: faker.random.number((M * 2)),
      url: faker.random.word(),
    })
    n++;
  }
}

const wrapped = performance.timerify(generatePhotos);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });

wrapped();
