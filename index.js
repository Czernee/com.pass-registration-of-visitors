const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const Client = require('./models/Client.js')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname)));

mongoose.connect('mongodb://127.0.0.1/test')
    .then(() => console.log("MongoDB connected."))
    .catch(err => console.log(err)) 

app.listen(PORT, () => {
    console.log("Server has been started...")
})    

app.get('/', (req, res) => {
    res.send('Hello world!')
    console.log('GET request received')
});

app.post('/', (req, res) => {
    console.log('POST method')
})

app.get('/creation', (req, res) => {
    res.sendFile(path.join(__dirname, 'creation.html'))
})

app.post('/creation', (req, res) => {

});


