let loginButton = document.getElementById("login-submit")
let usernameInput = document.getElementById("username-login")
let passwordInput = document.getElementById("password-login")

loginButton.addEventListener('click', (e) => {
    e.preventDefault()
    const username = usernameInput.value 
    const password = passwordInput.value
    console.log(username,password)
    axios.post(`/api/users`, {
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