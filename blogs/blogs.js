const http = require('http');
const mongoose = require('mongoose')
require('dotenv').config()

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





// let title = document.querySelector('.title').textContent
// let article = document.querySelector('.article').textContent
// let notes = document.querySelector('.notes').textContent

// let blog = {title: title, article: article, notes: notes}
// let blogs = []