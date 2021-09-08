var path = require('path')
const express = require('express')
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



app.post("/api_data", async function (req, res) {
    const baseApiURL = 'https://api.meaningcloud.com/sentiment-2.1?'
    const API_KEY  = process.env.API_KEY
    let url = req.body.url;
    const apiFullURL = `${baseApiURL}key=${API_KEY}&url=${url}&lang=en`
    const response = await fetch(apiFullURL)
    const body = await response.json();
    res.json(body);
    
    })
    app.get('/', function (req, res) {
        res.sendFile("dist/index.html");
    })



app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`The App is listening on port ${PORT}!`)
})
module.exports = app
