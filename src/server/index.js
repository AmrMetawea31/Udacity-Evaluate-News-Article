// TODO: Configure the environment variables
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const PORT = 8082

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'))



const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const API_KEY  = process.env.API_KEY

app.post("/api", async function (req, res) {
    let url = req.body.url;
    const apiURL = `${baseURL}key=${API_KEY}&url=${url}&lang=en`
    const response = await fetch(apiURL)
    const body = await response.json();
    const Data = res.json(body);
    res.send(Data)
    })
    app.get('/', function (req, res) {
        res.sendFile("dist/index.html");
    })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})
module.exports = app
