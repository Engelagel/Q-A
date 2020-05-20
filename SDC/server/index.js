const expres = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3004;

app.get('/qa/:product_id', (req, res) => {
  res.send('getall')
  if (err) {
    console.log(err);
  }
})

app.get('/', (req, res) => {
  res.send('get1')
  if (err) {
    console.log(err);
  }
})


app.post('/', (req, res) => {
  res.send('post')
  if (err) {
    console.log(err);
  }
})


app.put('/', (req, res) => {
  res.send('put')
  if (err) {
    console.log(err);
  }
})


app.delete('/', (req, res) => {
  res.send('delete')
  if (err) {
    console.log(err);
  }
})
      
app.listen(port, () => console.log(`Server is running on port ${port}`));