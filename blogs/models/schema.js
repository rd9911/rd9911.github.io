const mongoose = require('mongoose')

const essay = new mongoose.Schema({
    title: String,
    body: String,
    publishedDate: Date,
    notes: String,
    references: String
})

module.exports = mongoose.model('Essay', essay)