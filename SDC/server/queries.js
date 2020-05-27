const {Q, A, Photo} = require('../database/db.js')

exports.getQuestions = (req, res) => {
  Q.find({product_id: req.params.product_id})
    .then((data) => {
      res.status(200).send(data)
  })
}