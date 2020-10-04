const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/createArticle', (req, res) => {
  console.log(req.body)
  res.status(200).send()
})

app.post('/subscribe', (req, res) => {
  console.log(req.body)
  res.status(200).send()
})

app.listen(port, () => console.info(`Worbix Fake Server listening @ http://localhost:${port}`))
