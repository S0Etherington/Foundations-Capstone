const baseUrl = "http://localhost:5505"

const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/log-in.html'))
})
app.use(express.static('public'))

const port = process.env.PORT || 5505

const {
    getUser, newOutfit, loadOutfit
} = require('./controller')

app.post(`/api/users`, getUser)
app.post('/api/outfit', newOutfit)
app.get('./api/outfit/:outfitId', loadOutfit)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})