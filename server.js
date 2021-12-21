const bodyParser = require('body-parser')

const express = require('express')

const app = express()

const router = require('./routes.js')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/', router)

app.listen(3000, function () {
  console.log('Server is running on port 3000')
})