const baseUrl = "http://localhost:5505"

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
    special: document.getElementById("special-option")
}

// selecting all clothing images
let clothes = document.getElementsByClassName("clothesImage")

const wardrobe = {
    immuneToFireball: "../images/IMG_0092.PNG",
    exam: "../images/IMG_0091.PNG",
    hello: "../images/IMG_0090.PNG",
    pokemon: "../images/IMG_0088.PNG",
    goats: "../images/IMG_0089.PNG",
    blenderBottle: "../images/IMG_0087.PNG",
    petSocks: "../images/IMG_0084.PNG",
    pokemonSocks: "../images/IMG_0085.PNG",
    adderall: "../images/IMG_0086.PNG",
    tears: "../images/IMG_0095.PNG",
    cats: "../images/IMG_0094.PNG",
    monster: "../images/IMG_0096.PNG",
    special: "../images/IMG_0093.PNG"
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
optionButtons.special.addEventListener('click', () => surprise(wardrobe.special, "specialImage"))

const loadOutfit = (id) => {
    axios.get(`${baseUrl}/api/outfit?id=${id}`)
}

let saveButton = document.getElementById('saveButton')

saveButton.addEventListener('click', () => {
    const shirt = document.getElementById("shirtImage")
    const pants = document.getElementById('pantsImage')
    const socks = document.getElementById('socksImage')
    const accessory = document.getElementById('accessoryImage')
    const special = document.getElementById('specialImage')

    const newOutfit = {
        outfit: {
            shirt,
            pants,
            socks,
            accessory,
            special,
            id: outfitID
        }      
    }

    axios.post(`${baseUrl}/api/outfit/`, newOutfit)

    const outfitHolder = document.getElementById("outfit-holder")
    const newButton = document.createElement('button')
    newButton.setAttribute('id', `outfit${outfitID}`)
    newButton.innerHTML = `Outfit ${outfitID}`

    outfitID++
    outfitHolder.appendChild(newButton)
    newButton.addEventListener('click', loadOutfit(`${outfitID}`))
})