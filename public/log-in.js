const baseUrl = "http://localhost:5505"

let loginButton = document.getElementById("login-submit")
let usernameInput = document.getElementById("username-login")
let passwordInput = document.getElementById("password-login")

loginButton.addEventListener('click', (e) => {
    e.preventDefault()
    const username = usernameInput.value 
    const password = passwordInput.value
    console.log(username,password)
    axios.post(`${baseUrl}/api/users`, {
        username,
        password
    })
    .then((res) => {
        if(res.status === 200){
            window.location.href = "./main.html"
        } else {
           const error = document.getElementById("errorText")
           error.style.display = 'block'
        }
    })
})




// let loginButton = document.getElementById("login-submit")
// let usernameInput = document.getElementById("username-login")
// let passwordInput = document.getElementById("password-login")

// loginButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     const username = usernameInput.value 
//     const password = passwordInput.value
//     console.log(username,password)
//     axios.post(`${baseUrl}/api/users`, {
//         username,
//         password
//     })
//     .then((res) => {
//         if(res.status === 200){
//             const loggedIn = document.getElementById("loggedIn")
//             loggedIn.style.display = 'block'
//         } else {
//            const error = document.getElementById("errorText")
//            error.style.display = 'block'
//         }
//     })
// })