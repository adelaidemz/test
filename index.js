const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static('static'))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.use('/', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    console.log('Request Type:', req.method)
    res.sendFile(path.join(__dirname+'/index.html'));
    // next()
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})