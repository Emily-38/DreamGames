async function connexion() {
    const email= document.querySelector('#Email').value
    const password= document.querySelector('#password').value

    let user = {
        email: email,
        password: password,
    }

    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(user),
    }

    let apiRequest = fetch('http://localhost:3444/login', request)
    let response = await apiRequest
    if (response.status === 200) {
        const data = await response.json()
        window.localStorage.setItem('jwt', data.jwt)
        window.location.href = '../Home/Home.html'
        }
}