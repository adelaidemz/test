const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'static')));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.use('/', (req, res) => {
    console.log('Request URL:', req.originalUrl)
    console.log('Request Path:', req.path)
    console.log('dir name:', __dirname)
    res.sendFile(path.join(__dirname+'/index.html'));
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})