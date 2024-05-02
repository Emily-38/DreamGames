
const jwt=localStorage.getItem('jwt')

 async function mailer() {
const sujet =document.querySelector('#sujet').value
const corps=document.querySelector('#corps').value

let message = {
    sujet: sujet,
    corps: corps
}

    let request = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(message),
    }

    let apiCall = await fetch('http://localhost:3444/mailer', request)
    let response = await apiCall.json()
    console.log(response)
    
    alert('message envoyer')
  }

  async function logOut(){
    localStorage.clear()
    window.location.href="../../Acceuil/acceuil.html"
}

  