const express = require('express')
const bodyParser = require('body-parser')
const Alarm = require('../models/alarm')
const router = express.Router();
router.use(bodyParser.json());

/*
    Get Arduino data values
*/

router.get("/", (req, res) => {
    Alarm.find()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json({message: error}))
})

/*
    Send Arduino data values
*/

router.post("/save", (req, res) => {
    const {timestamp, value} = req.body

    const data = new Alarm({
        timestamp,
        value
    })
    data.save()
    .then(() => res.status(200).json({message: "New value added"}))
    .catch(error => res.status(400).json({message: error}))

})

/*
    Delete data value
*/

router.delete("/delete/:id", (req, res) => {
    Alarm.findByIdAndDelete(req.params.id, (error, result) => {
        if(result) {
            return res.status(200).json({message: "Data value deleted!"})

        }
        else {
            return res.status(400).json({message: error})
        }
    })
})

/*
    Delete ALL Arduino data values
*/

router.delete("/delete", (req, res) => {
    Alarm.deleteMany() 
    .then(res.status(200).json({message: "All values deleted!"}))
    .catch(error => res.status(400).json({message: error}))
      
})

module.exports = router