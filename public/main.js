let outfitID = 1

// making an object that contains all category buttons
let catButtons = {
    // getElementById
    shirtCatButton: document.getElementById("shirts"),
    pantsCatButton: document.getElementById("pants"),
    socksCatButton: document.getElementById("socks"),
    accessoriesCatButton: document.getElementById("accessories"),
    specialCatButton: document.getElementById("special-option")
}

// making an object that contains all option buttons in each category
let buttonsByCat = {
    // getElementByClassName
    shirtsButtons: "shirt-option",
    pantsButtons: "pants-option",
    socksButtons: "socks-option",
    accessoriesButtons: "accessory-option",
}

let optionButtons = {
    // getElementById
    shirt1: document.getElementById("shirtOption1"),
    shirt2: document.getElementById("shirtOption2"),
    shirt3: document.getElementById("shirtOption3"),
    pants1: document.getElementById("pantsOption1"),
    pants2: document.getElementById("pantsOption2"),
    pants3: document.getElementById("pantsOption3"),
    socks1: document.getElementById("sockOption1"),
    socks2: document.getElementById("sockOption2"),
    socks3: document.getElementById("sockOption3"),
    accessory1: document.getElementById("accessoryOption1"),
    accessory2: document.getElementById("accessoryOption2"),
    accessory3: document.getElementById("accessoryOption3"),
    // special: document.getElementById("special-option")
}

// selecting all clothing images
let clothes = document.getElementsByClassName("clothesImage")

const wardrobe = {
    immuneToFireball: "https://i.postimg.cc/3x6c4K0W/IMG-0092.png",
    exam: "https://i.postimg.cc/26nMNP6y/IMG-0091.png",
    hello: "https://i.postimg.cc/PrXc0Vkf/IMG-0090.png",
    pokemon: "https://i.postimg.cc/fRkPR3L6/IMG-0088.png",
    goats: "https://i.postimg.cc/NfdVt8g6/IMG-0089.png",
    blenderBottle: "https://i.postimg.cc/XNcmHSmD/IMG-0087.png",
    petSocks: "https://i.postimg.cc/KjNWRBty/IMG-0084.png",
    pokemonSocks: "https://i.postimg.cc/j2K9xZwX/IMG-0085.png",
    adderall: "https://i.postimg.cc/1zk2T9yb/IMG-0086.png",
    tears: "https://i.postimg.cc/gJbtsNDW/IMG-0095.png",
    cats: "https://i.postimg.cc/XJKHzdHy/IMG-0094.png",
    monster: "https://i.postimg.cc/6q9jJqgb/IMG-0096.png",
    special: "https://i.postimg.cc/YSWyQJQR/IMG-0093.png"
}

// function to display the options for each category you select
const displayButtons = (str) => {
    Object.values(buttonsByCat).forEach((elem) => {
        const arrayOButtons = document.getElementsByClassName(elem)
        for(let i = 0; i < arrayOButtons.length; i++) {
            arrayOButtons[i].style.display = 'none'
        }
    })
    const chosenButtons = document.getElementsByClassName(buttonsByCat[str])
    for(let i = 0; i < chosenButtons.length; i++) {
        chosenButtons[i].style.display = 'block'
    }
}

// funtion to display the option you have selected on the character
const displayImage = (src, id) => {
    document.getElementById('specialImage').src = ''
    
    document.getElementById(id).src = src
} 

const surprise = () => {
    for(let i = 0; i < clothes.length; i++){
        clothes[i].src = ''
    }
    
    document.getElementById('specialImage').src = '../images/IMG_0093.PNG'
}

// event listeners for each category button to display the options in that category
catButtons.pantsCatButton.addEventListener('click', () => displayButtons('pantsButtons'))
catButtons.shirtCatButton.addEventListener('click', () => displayButtons('shirtsButtons'))
catButtons.socksCatButton.addEventListener('click', () => displayButtons('socksButtons'))
catButtons.accessoriesCatButton.addEventListener('click', () => displayButtons('accessoriesButtons'))

// event listeners for each clothing item to be displayed
optionButtons.shirt1.addEventListener('click', () => displayImage(wardrobe.immuneToFireball, "shirtImage"))
optionButtons.shirt2.addEventListener('click', () => displayImage(wardrobe.exam, "shirtImage"))
optionButtons.shirt3.addEventListener('click', () => displayImage(wardrobe.hello, "shirtImage"))
optionButtons.pants1.addEventListener('click', () => displayImage(wardrobe.pokemon, "pantsImage"))
optionButtons.pants2.addEventListener('click', () => displayImage(wardrobe.goats, "pantsImage"))
optionButtons.pants3.addEventListener('click', () => displayImage(wardrobe.blenderBottle, "pantsImage"))
optionButtons.socks1.addEventListener('click', () => displayImage(wardrobe.petSocks, "socksImage"))
optionButtons.socks2.addEventListener('click', () => displayImage(wardrobe.pokemonSocks, "socksImage"))
optionButtons.socks3.addEventListener('click', () => displayImage(wardrobe.adderall, "socksImage"))
optionButtons.accessory1.addEventListener('click', () => displayImage(wardrobe.tears, "accessoryImage"))
optionButtons.accessory2.addEventListener('click', () => displayImage(wardrobe.monster, "accessoryImage"))
optionButtons.accessory3.addEventListener('click', () => displayImage(wardrobe.cats, "accessoryImage"))
// optionButtons.special.addEventListener('click', () => surprise(wardrobe.special, "specialImage"))

// save outfit functionality

let saveButton = document.getElementById('saveButton')

const shirt = document.getElementById("shirtImage")
const pants = document.getElementById('pantsImage')
const socks = document.getElementById('socksImage')
const accessory = document.getElementById('accessoryImage')
const special = document.getElementById('specialImage')

saveButton.addEventListener('click', () => {

    let saveShirt = "Shirt: None"
    let savePants = "Pants: None"
    let saveSocks = "Socks: None"
    let saveAccessory = "Accessories: None"
    let saveSpecial = "Special: None"

    if(shirt.src === wardrobe.immuneToFireball){
        saveShirt = "Shirt: Immune to Fireball"
    } else if (shirt.src === wardrobe.exam){
        saveShirt = "Shirt: Week 4 Exam"
    } else if (shirt.src === wardrobe.hello){
        saveShirt = "Shirt: Helloooooo"
    } else if (shirt.src === ""){
        saveShirt = "Shirt: None"
    }

    if(pants.src === wardrobe.pokemon){
        savePants = "Pants: Pokemon Pants"
    } else if (pants.src === wardrobe.goats){
        savePants = "Pants: Goats"
    } else if (pants.src === wardrobe.blenderBottle){
        savePants = "Pants: Blender Bottle"
    } else if (pants.src === ""){
        savePants = "Pants: None"
    }

    if(socks.src === wardrobe.petSocks){
        saveSocks = "Socks: Pets"
    } else if (socks.src === wardrobe.pokemonSocks){
        saveSocks = "Socks: Falinks"
    } else if (socks.src === wardrobe.adderall){
        saveSocks = "Adderall"
    } else if (socks.src === ""){
        saveSocks = "Socks: None"
    }

    if(accessory.src === wardrobe.cats){
        saveAccessory = "Accessory: Joely's Cats"
    } else if (accessory.src === wardrobe.tears){
        saveAccessory = "Accessory: Scott's Favorite Drink"
    } else if (accessory.src === wardrobe.monster){
        saveAccessory = "Accessory: Kyle's Life Force"
    } else if (accessory.src === ""){
        saveAccessory = "Accessory: None"
    }

    if(special.src === wardrobe.special){
        saveSpecial = "Special: Et Tu Brute?"
    } else if (special.src === ""){
        saveSpecial = "Special: None"
    }

    let newOutfit = `${saveShirt, savePants, saveSocks, saveAccessory,saveSpecial}`
    

    axios.post(`/api/outfit/`, newOutfit)

    const outfitHolder = document.getElementById("outfit-holder")
    const newButton = document.createElement('p')
    newButton.setAttribute('id', `outfit${outfitID}`)
    newButton.innerHTML = `Outfit ${outfitID}: ${saveShirt}, ${savePants}, ${saveSocks}, ${saveAccessory}`

    outfitID++
    outfitHolder.appendChild(newButton)
})

