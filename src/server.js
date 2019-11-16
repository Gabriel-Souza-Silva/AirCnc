//req.query.idade
    //->http://localhost:3333/users?idade=24
//req.params.id
    //'/users/:id'
    //->'/users/1'
//req.body
const express = require ('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://OiMeuChapa:Testeteste@cluster0-f5gl2.mongodb.net/dbApSemana09?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(cors())
app.use(express.json())
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')))
app.use(routes)
app.listen(3333)