const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        defdault: Date.now
    }
})

module.exports = mongoose.model('Article', articleSchema)