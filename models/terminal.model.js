const mongoose = require('mongoose')


const Terminal = mongoose.model (
    "terminal",
    new mongoose.Schema({
        name: String,
        flights: [],
        capacity: Number,
    })
)


module.exports = Terminal