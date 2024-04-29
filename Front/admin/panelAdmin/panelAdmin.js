const card = document.querySelector('.card')
const jwt= localStorage.getItem('jwt')
async function allUser(){
    let request = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${jwt}`,
      },
    }
    let apiCall = await fetch('http://localhost:3444/allUser',request)
    let response = await apiCall.json()
    card.innerHTML=""
    response.forEach(user => {
        if(user.role=== 'user'){
      card.innerHTML +=`<div class="flex flex-rows flex-wrap gap-2 bg-gray-300 rounded text-center m-3 shadow-md p-2">
      <p>Nom:${user.last_name}</p>
      <p>Prenom:${user.first_name}</p>
      <p>Adresse:${user.address}</p>
      <p>Email:${user.email}</p>
      </div>`
        }
    })
}

async function AllLoc(){
    let request = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${jwt}`,
      },
    }
    let apiCall = await fetch('http://localhost:3444/allLoc',request)
    let response = await apiCall.json()
card.innerHTML=""
    response.forEach(location => {
card.innerHTML+=`
<div class="flex flex-rows flex-wrap gap-5 bg-gray-300 rounded text-center m-3 shadow-md p-2">
    <div>
    <p class="text-center font-bold">User</p>
      <p>Nom: ${location.last_name}</p>
      <p>Prenom: ${location.first_name}</p>
    </div>
    <div>
    <p class='text-center font-bold'>Article</p>
      <p>${location.title}</p>
    </div>
    <div>
    <p class='text-center font-bold'> Durée de loction</p>
      <p>date de debut: ${location.date_start}</p>
      <p>date de fin: ${location.date_end}</p>
      <p>status: ${location.status}</p>
      </div>
      ${location.status=== 'a valider'? `<div>
      <button onclick="supprimerLoc('${location.location_id}')" class="bg-red-500 m-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Supprimer</button>
      <button onclick="modifierLoc('${location.location_id}')" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Modifier</button>
      </div>`: `<div>
      <button onclick="supprimerLocAddQuantity('${location.location_id}')" class="bg-red-500 m-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Supprimer</button>
      <button onclick="modifierLoc('${location.location_id}')" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Modifier</button>
      </div>`}
     
      </div>
`
    })
}
async function supprimerLoc(id){
    let request1 = {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${jwt}`,
      },
    }
    let deleteLocation = await fetch(`http://localhost:3444/supprLoc/${id}`, request1)
    let responsedelete = await deleteLocation.json()
        window.location.reload() 
      
  }
async function modifierLoc(id){
    localStorage.setItem('article',id)
    window.location.href="../../Home/valider/valider.html"
  }
async function supprimerLocAddQuantity(id){
    console.log(id)
    let request = {
            method: 'PATCH',
            headers: {
              'Content-type': 'application/json; charset=utf-8',
              Authorization: `Bearer ${jwt}`,
          },
        }
        let Location = await fetch(`http://localhost:3444/addArticle/${id}`, request)

        let request1 = {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json; charset=utf-8',
              Authorization: `Bearer ${jwt}`,
          },
        }
        let deleteLocation = await fetch(`http://localhost:3444/supprLoc/${id}`, request1)
        
                // window.location.reload() 
            return
        }


async function AllArticle(){
    let request = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${jwt}`,
      },
    }
    let apiCall = await fetch('http://localhost:3444/Article',request)
    let response = await apiCall.json()
card.innerHTML=""
    response.forEach(article => {
        if(article.quantity=== 0)
card.innerHTML+=`
 
<div class="flex flex-rows justify-between flex-wrap  bg-gray-300 rounded text-center m-3 shadow-md p-2">
    <div class="text-center ">
      <p>titre: ${article.title}</p>
      <p>description: ${article.description}</p>
      <p>category: ${article.category}</p>
      <p>quantité Maximum: ${article.quantityMax}</p>
    </div>
    <div class="flex flex-col justify-center">
      <button onclick="updateArticle('${article.id}')" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Modifier</button>
    </div>
</div>
`
    })
}
async function updateArticle(id){
    localStorage.setItem("article", id)
    window.location.href="../update/ModifierArticle.html"
}
async function AllArticleNotLoc(){
    let request = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${jwt}`,
      },
    }
    let apiCall = await fetch('http://localhost:3444/allArticleNotLoc',request)
    let response = await apiCall.json()
card.innerHTML=""
    response.forEach(article => {
card.innerHTML+=`
 
<div class="flex flex-rows justify-between flex-wrap  bg-gray-300 rounded text-center m-3 shadow-md p-2">
    <div class="w-1/5 text-center ">
      <p>titre: ${article.title}</p>
      <img src="../../../Back/uploads/${article.image}"
      <p>description: ${article.description}</p>
      <p>category: ${article.category}</p>
      <p> quantité: ${article.quantity}</p>
      <p>quantité Maximum: ${article.quantityMax}</p>
    </div>
    
</div>
`
    })
}




async function logOut(){
    localStorage.clear()
    window.location.href="../../Acceuil/acceuil.html"
}
