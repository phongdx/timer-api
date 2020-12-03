const express = require('express')
const mongoose = require('mongoose')
const dbUrl = 'mongodb+srv://phong:phong123@timers.59e2r.mongodb.net/Timers'

const app = express()

mongoose.connect(
  dbUrl,
  {useNewUrlParser:true},
  () => console.log('connected to DB')
)

app.use(express.json())

const timerRouter = require('./routes/timers')
app.use('/timers',timerRouter)

app.listen(9000, () => {
    console.log('Server is running!')
})
