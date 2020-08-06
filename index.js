const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use('/faves', require('./controller/faves'));
app.use('/hates', require('./controller/hates'));

app.get('/', function(req, res){
    res.render('home')
})

// app.get('/animals', function(req, res){
//     res.render('animals', {title: 'Favorite Animals', animals: ['sand crab', 'dog']})
// })

// app.get('/foods', function(req, res){
//     res.render('foods', {title: 'Favorite Foods', foods: ['Hotdog', 'crab']})
// })

app.listen(8000)