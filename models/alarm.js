const mongoose = require('mongoose')
const Schema = mongoose.Schema

const alarmSchema = new Schema({
    timestamp: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

const Alarm = mongoose.model("Alarm", alarmSchema)
module.exports = Alarm

