import express from 'express'
import { readFileSync, writeFileSync } from 'fs';

function loadData() {
  const raw = readFileSync('./database.json', 'utf-8');
  const obj = JSON.parse(raw);
  return obj;
}

function saveData(obj) {
  const raw = JSON.stringify(obj, null, 2);
  writeFileSync('./database.json', raw, 'utf-8');
}

const app = express()
const bubbles = loadData()

app.get('/', (req, res) => {
  res.send('index page')
})

app.get('/api/v1/bubble', (req, res) => {
  res.send(bubbles)
})

app.get('/api/v1/bubble/:id', (req, res) => {
  const id = Number(req.params.id)
  const bubble = bubbles.find(b => b.id === id)
  res.send(bubble)
})

app.get('/api/v1/bubble/:id', (req, res) => {})

app.listen(3000)
