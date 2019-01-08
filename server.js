import express from 'express';
const app = express()
// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// run PORT=8081 npm start to change port number
const port = process.env.PORT || 5656;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index')
})