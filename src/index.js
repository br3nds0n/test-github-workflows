const express = require('express');

const app = express()

app.get('/', (req, res) => {
 res.json('olá')
})

app.listen(3000)