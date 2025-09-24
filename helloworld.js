import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('index page')
})

app.get('/nalgae', (req, res) => {
  res.send('nalgae')
})

app.listen(80)
