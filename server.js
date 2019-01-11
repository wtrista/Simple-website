const express = require('express')
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

app.get('/About_you', (req, res) => {
    res.render('you', {
        title: 'Hey',
        message: 'How you doin <3'
    })
})
app.get('/Still_you', (req, res) => {
    res.render('you', {
        title: 'Yo',
        message: 'What you upto?'
    })
})
app.get('/And_you_again', (req, res) => {
    res.render('you', {
        title: 'Sweetie',
        message: 'Good night and sweet dreams!'
    })
})
