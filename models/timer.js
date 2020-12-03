const mongoose = require('mongoose')


const timerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum : ['ONGOING','COMPLETED'],
        default: 'ONGOING'
    }

})

module.exports = mongoose.model('Timers',timerSchema)
