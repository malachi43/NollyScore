const email = document.getElementById("email")
const password = document.getElementById("pwd")
const form = document.getElementById('login-form')

function loginUser(e) {
    e.preventDefault()
    let userEmail = email.value
    let userPassword = password.value
    email.value = ""
    password.value = ""
    console.log(userEmail, userPassword)


    //retrieve user data from local storage
    let userData = JSON.parse(localStorage.getItem('userObj'))

    if (!userData) {
        localStorage.setItem("userObj", JSON.stringify({ "emails": [], "passwords": [] }))
        userData = JSON.parse(localStorage.getItem('userObj'))
    }

    console.log("userArray: ", userData)
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

    //navigate to the desired page on successful login.
    window.location = "tvSeries.html"
}

form.addEventListener("submit", loginUser)
