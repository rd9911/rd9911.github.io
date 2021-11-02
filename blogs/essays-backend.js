const http = require('http');
const mongoose = require('mongoose')
const express = require('express')
const essayRouter = express.Router()
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json)

const Essay = require('./models/schema')

main().catch(error => console.log(error))

async function main () {
    await mongoose.connect(`mongodb+srv://rd9911:${process.env.PASSWORD}@cluster0.sdvoq.mongodb.net/my-essays?retryWrites=true&w=majority`)
    console.log('Connected')

    const hostname = '127.0.0.1'
    const port = 3000

    const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end()
    })
    server.listen(port, hostname, () => {
        console.log(`Server is running at https://${hostname}/${port}`)
    })
}



essayRouter.post('/', async (req, res) => {
    const body = req.body
    const essayToPublish = new Essay({
        title: body.title,
        body: body.body,
        publishedDate: body.date,
        notes: body.notes,
        references: body.references
    })
    const response = await essayToPublish.save()
    return res.status(201).json(result)
})

essayRouter.post('/', async (res, res) => {
    const result = await Essay.find({})
    return res.json(result)
})