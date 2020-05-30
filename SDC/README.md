N - Q&A

Initial Set-up
 cd into SDC folder
 npm install
 run server script --see below--


CRUD Routes
 GET questions with answers by product id --no reported questions included
 GET answers by question id --no reported answers included

 POST new question for product
 POST new answer for question

 PUT marks a question as helpful
 PUT reports a question
 PUT marks an answer as helpful
 PUT reports a question

Scripts

npm run test -- not up yet
npm run server -- starts nodemon

npm run seedQ --generates question data --follow the runs in the comments above the generation functino to create all 10M--
npm run seedA --generates answer data --follow the runs in the comments above the generation functino to create all 10M--

npm run seedMQ --imports question data to mongo
npm run seedMA --imports answer data to mongo
