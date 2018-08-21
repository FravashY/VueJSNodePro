const express = require('express')
const app = express()
const itemRoutes = express.Router()

// Require Item model in our routes module
const Item = require('../models/Item')

// Defined store route
itemRoutes.route('/add').post(function (req, res) {
  const item = new Item(req.body)
  item.save()
    .then(item => {
      res.status(200).json({'item': 'Item added successfully'})
    })
    .catch(err => {
      res.status(400).send('Unable to save to database')
    })
})

// Defined get data(index or listing) route
