let users = require('./users.json')
let userOutfitId = 1
const fs = require('fs')

const writeJson = (current) => {
        fs.readFile('./users.json', 'utf8', (err, data) => {
        if (err){
            console.log(err)
        } else {
        const json = JSON.parse(data)
        json.activeUser = current.user_id
        fs.writeFile('./users.json', JSON.stringify(json), 'utf8', () => {})
    }})
}

module.exports = {
    getUser: (req, res) => {
        const {username, password} = req.body
        const current = users.users.find(elem => elem.username === username)
        if(current){
            if(current.password === password){
                res.status(200).send(current)
                writeJson(current)
            } else {
                res.status(400).send('Incorrect Credentials')
            }
        } else {
            res.status(400).send('Incorrect Credentials')
        }
    },

    newOutfit: (req, res) => {
        const {shirt, pants, socks, accessory, special} = req.body
        let userId = users.activeUser
        
        const newOutfit = {
            id: userOutfitId,
            shirt,
            pants,
            socks,
            accessory,
            special
        }

        const activeUser = users.users.find(elem => elem === userId)
        activeUser.outfits.push(newOutfit)


        userOutfitId++
    },

    loadOutfit: (req, res) => {
        const {outfitId} = req.params
        const {activeUser} = user
        const user = users.users.find(elem => elem.user_id === activeUser)
        res.status(200).send(user.outfits.find(elem => elem.id === outfitId))
    }
}