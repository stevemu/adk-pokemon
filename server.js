const express = require('express')
const app = express()

app.use(express.static('build'))

app.listen(5002, () => console.log('server is listening on port 5002!'))