const express = require('express')
const app = express()
const port = process.env.port || 5000

require('./db')

var cors = require('cors')
app.use(cors())
app.use(express.json())

const measurementAlarmRoute = require("./routes/alarms");

app.use("/api/data", measurementAlarmRoute)

app.get('/api', (req, res) => {
  res.send('Welcome measure data API')
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})