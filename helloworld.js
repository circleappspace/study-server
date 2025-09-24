import express from 'express'

const app = express()

app.get('/nalgae', (req, res) => {
  res.send('nalgae')
})

app.listen(3000)