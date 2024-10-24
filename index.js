import express from 'express'
import connectMongoDB from './config/db.js'

const app = express() // create app
const port = process.env.PORT || 8000

connectMongoDB()

app.set('view engine','ejs')

//Hello world
app.get('/', (req, res) => {
    //return res.send('Hello world!!!!!XD')
    res.render('index',{title:'Home page'})
})

app.listen(3000, (req, res) => {
    console.log(`SERVER is running on http://localhost:${3000}`)
})