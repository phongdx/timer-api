const express = require('express')
const router = express.Router()
const Timers = require('../models/timer')


// Creating a timer
router.post('/', async(req,res) => {
    const timer = new Timers({
        name: req.body.name,
        duration: req.body.duration,
    })

    try{
        const t =  await timer.save()
        res.json(t)
    }catch(err){
        res.send('Error')
    }
})

// Changing the duration of the timer
router.put('/:id/duration', async(req,res) => {
    try{
           const timer = await Timers.findById(req.params.id)
           timer.duration = req.body.duration
           await timer.save()
           res.json(timer)
    }catch(err){
        res.send('Error ' + err)
    }
})

// Marking the timer is completed
router.put('/:id/complete', async(req,res) => {
    try{
           const timer = await Timers.findById(req.params.id)
           timer.status = "COMPLETED"
           await timer.save()
           res.json(timer)
    }catch(err){
        res.send('Error ' + err)
    }
})

// List all of the timers
router.get('/', async(req,res) => {
    try{
           const timers = await Timers.find()
           res.json(timers)
    }catch(err){
        res.send('Error ' + err)
    }
})

// Delete a timer
router.delete('/:id',async(req,res)=> {
    try{
        await Timers.deleteOne({ _id: req.params.id })
        res.send('Successfully deleted')
    }catch(err){
        res.send('Error ' + err)
    }

})

module.exports = router
