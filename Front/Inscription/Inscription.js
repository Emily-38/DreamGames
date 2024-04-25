
async function CreatUser(){
    const email= document.querySelector('#Email').value
    const password= document.querySelector('#password').value
    const firstname= document.querySelector('#Prenom').value
    const lastname= document.querySelector('#Nom').value

    let user ={
        email:email,
        password:password,
        firstname: firstname,
        lastname:lastname
    }
    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(user),
    }
 let apiRequest = await fetch('http://localhost:3444/register', request)
 let response = await apiRequest
    if (response.status === 200) {
        window.location.href = '../connexion/connexion.html'
    }
    
}