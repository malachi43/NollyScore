const email = document.getElementById("email")
const password = document.getElementById("pwd")
const form = document.getElementById('login-form')
let userEmail
function loginUser(e) {
    e.preventDefault()
    userEmail = email.value
    let userPassword = password.value
    email.value = ""
    password.value = ""


    //retrieve user data from local storage
    let userData = JSON.parse(localStorage.getItem('userObj'))

    if (!userData) {
        localStorage.setItem("userObj", JSON.stringify({ "emails": [], "passwords": [] }))
        userData = JSON.parse(localStorage.getItem('userObj'))
    }

    checkIfUserIsAuthenticated(userEmail, userPassword)
}

function checkIfUserIsAuthenticated(email, password) {
    let data = JSON.parse(localStorage.getItem('userObj'))

    if (!email || !password) {
        alert('email and password are required.')
        return
    }
    let enteredEmail = data.emails.includes(email)
    if (!enteredEmail) {
        alert('Invalid credentials')
        return
    }
    let enteredPassword = data.passwords.includes(password)
    if (!enteredPassword) {
        alert('Invalid credentials')
        return
    }

    const username = userEmail.slice(0, userEmail.indexOf('@'))

    //navigate to the desired page on successful login.
    // window.location = "userpage.html"
    addAsQueryString(username)
}


function addAsQueryString(str) {
    let pathname = `/userpage.html`
    let search = `username=${str}`
    const url = new URL(window.location)
    url.pathname = pathname
    url.search = search
    window.location = url.href
    // console.log(url)
}

form.addEventListener("submit", loginUser)
