N - Q&A

Q-A is an API that is set to scale and optimize a minimum of 10 million records for an e-commerce's (similar to Amazon) sites Question and Answer service.

Tech Stack:
Server: Express.js, Nodemon, [Redis]
Database: MongoDB, Mongoose, Faker
Testing: K6, New Relic
Deployment: AWS Ec2

How to Spin-Up:
 cd into SDC folder
 npm install
 run server script --see below--
 generate data via Data Generation Scrips --see below--
 import data into mongo via Data Import Scripts --see below--
 add indexes to MongoDB
  - product_id --> question collection
  - answer_id --> answer collection
  - question_id --> answer collection
 
*to run tests at any time run the test script --see below--


Scripts:
npm run test -- runs k6 load balancing test
npm run server -- starts nodemon

Data Generation Scripts:
npm run seedQ --generates question data --follow the runs in the comments above the generation functino to create all 10M--
npm run seedA --generates answer data --follow the runs in the comments above the generation functino to create all 10M--

Data Import Scripts:
npm run seedMQ --imports question data to mongo
npm run seedMA --imports answer data to mongo


Overall records total to 60 million
- 10 million questions 
- 10 million answers
- 40 million photos (4/answer)


Pre-Deployment Testing (K6):
 
 <img src='SDC/k6Test10-17s.jpg'>

 Without indexing
  10vus     17.19s,
  100 vus   57.89s,
  1000 vus  1m
  
  With indexing
   10vus     3.98ms,
   100 vus   1m+,
   1000 vus  1m+
    
    
    Future Optimizations:
    - complete redis cache
    - deploy with redis
    - load balancer
    - increase overall load to 10k with avg request duration <= 50ms
    - complete project with PostgreSQL
