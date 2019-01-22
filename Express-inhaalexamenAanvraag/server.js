const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

//connect to mongodb
MongoClient.connect('mongodb://localhost:27017/examen', (err, database) => {
    if(err) return console.log(err)
    db = database.db('examen')
    app.listen(process.env.PORT || 3000, () => {
        console.log('Listening on port 3000')
    })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static('public'))

//Redirect to add => startpage to /add
app.get('/', (req, res) => {
    res.redirect('/add')
})

//show the add product form => render to add form
app.get('/add', (req, res) => {
    res.render('add.ejs', {})
})

//aanvraag indienen
app.post('/add', (req, res) => {
    db.collection('inhaal').insertOne({naam: req.body.name, examen: req.body.exam, reden: req.body.reason, datum: new Date()}, (err, result) => {
        if(err) return console.log(err)
        res.redirect('/')
    })
})

//show search form => render search form
app.get('/search', (req, res) => {
    res.render('search.ejs', {})
})

//search for product by name
app.post('/search', (req, res) => {
    var query = {naam: req.body.name}
    db.collection('inhaal').find(query).toArray((err, result) => {
        if(err) return console.log(err)
        if(result == '')
            res.render('search_not_found.ejs', {})
        else
            console.log(result)

            res.render('search_result.ejs', {aanvragen: result.sort((a,b) => {return a.reden < b.reden ? -1 : 1 })})
    })
})
