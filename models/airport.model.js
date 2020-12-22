const mongoose = require('mongoose')

const Airport = mongoose.model (
    "airport",
    new mongoose.Schema({
        name: String,
        country: String,
        terminals: [],
        opened: Date,
    })
)

module.exports = Airport