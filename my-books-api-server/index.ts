import express from 'express'

const app = express()
const port = 8888

app.get('/', (req, res) => {
  res.send('Hello from my-books-api-server')
})

app.listen(port, () => {
  console.log(`my-books-api-server listening at http://localhost:${port}`)
})
