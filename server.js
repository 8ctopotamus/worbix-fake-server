const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const callback = (req, res) => {
  console.log(`[${req.url}]`, req.body)
  res.status(200).send()
}

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/createArticle', callback)
app.post('/subscribe', callback)
app.post('/managePlan', callback)

app.listen(port, () => console.info(`Worbix Fake Server listening @ http://localhost:${port}`))
