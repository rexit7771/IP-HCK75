require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes');
const cors = require('cors');
// const { OAuth2Client } = require('google-auth-library');
// const client = new OAuth2Client();
// const gemini 

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', router)


module.exports = app;