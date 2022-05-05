const express = require('express');

const app = express()

app.get('/', (req, res) => {
 res.json('Hello World !! 🌎')
})

async function server() {
  const PORT = 3000;

  app.listen(PORT, () => console.log(`📦 Server started at http://localhost:${PORT}`))
}

server();