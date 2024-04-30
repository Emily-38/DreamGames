

//securité de page ne peut pas y acceder si le jwt n'est pas bon renvoie sur login
let jwt = window.localStorage.getItem('jwt')
if (!jwt || jwt === 'undefined' || jwt.length < 20) {
    window.location.href = '../connexion/connexion.html'
}


let card= document.querySelector('.allArticle');

//fonction qui affiche les articles qui sont disponible uniquement
async function getAllArticles() {
    let apiCall = await fetch('http://localhost:3444/Article')
    let response = await apiCall.json()
    response.forEach(article => {
        if(article.quantity===0){

        }else{
        card.innerHTML +=`<div class="bg-gray-200 rounded text-center m-3 shadow-md p-2 md:w-1/5">
        
        <p class="font-bold">${article.title}</p>
        <img src="../../Back/uploads/${article.image}">
        <p>${article.description}</p>
        <p>${article.category} </p>
        <div class="flex flex-row justify-between">
        <p> disponible : ${article.quantity}</p>
        <p>${article.prix}€</p>
        </div>
        <button class="bg-green-500 m-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="AddArticle('${article.id}')">Louer<button>
        <div>`
        }
    });
}
getAllArticles()


// ajouter un article a une location lier au client
async function AddArticle(id){
    const modale=document.querySelector('.modale')
    
    let request = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${jwt}`,
      },
    }
    let apiCall = await fetch(`http://localhost:3444/addLocation/${id}`, request)
    let response = await apiCall.json()
    let requestLoc = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${jwt}`,
      },
    }
    let Location = await fetch(`http://localhost:3444/afficherLocation`, requestLoc)
    let Locresponse = await Location.json()
    
    Locresponse.forEach(loc => {
        if(loc.status ==="a valider"){
      modale.innerHTML+=`<div class="text-center bg-gray-100 m-2"><p>${loc.title}</p><p>${loc.category}</p>
      <p>${loc.prix}€</p></div>
      <button class="bg-green-500 m-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="valider('${loc.id}')">Valider</button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="deleteLoc(${loc.id})">Supprimer</button>`
    }  
    });
    alert('ajouter au panier')
}


async function panier(){
    const modale=document.querySelector('.modale')
    const article=document.querySelector('.article')
    article.classList.toggle('hidden')
    modale.classList.toggle('hidden')
}
async function valider(id){
    localStorage.setItem('article',id)
        window.location.href="./valider/valider.html"
 }
 async function deleteLoc(id){
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
async function Consoles() {
    let apiCall = await fetch('http://localhost:3444/Article')
    let response = await apiCall.json()
    card.innerHTML=""
    response.forEach(article => {
        if(article.category==="console"){
            if(article.quantity===0){

            }else{
            card.innerHTML +=`<div class="bg-gray-200 rounded text-center m-3 shadow-md p-2 md:w-1/5">
            
            <p class="font-bold">${article.title}</p>
            <img src="../../Back/uploads/${article.image}">
            <p>${article.description}</p>
            <p>${article.category} </p>
            <div class="flex flex-row justify-between">
            <p> disponible : ${article.quantity}</p>
            <p>${article.prix}€</p>
            </div>
            <button class="bg-green-500 m-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="AddArticle('${article.id}')">Louer<button>
            <div>`
            }
        }
    })
}
async function Accessoire() {
    let apiCall = await fetch('http://localhost:3444/Article')
    let response = await apiCall.json()
    card.innerHTML=""
    response.forEach(article => {
        if(article.category==="Accessoires"){
            if(article.quantity===0){

            }else{
            card.innerHTML +=`<div class="bg-gray-200 rounded text-center m-3 shadow-md p-2 md:w-1/5">
            
            <p class="font-bold">${article.title}</p>
            <img src="../../Back/uploads/${article.image}">
            <p>${article.description}</p>
            <p>${article.category} </p>
            <div class="flex flex-row justify-between">
            <p> disponible : ${article.quantity}</p>
            <p>${article.prix}€</p>
            </div>
            <button class="bg-green-500 m-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="AddArticle('${article.id}')">Louer<button>
            <div>`
            }
        }
    })
}
async function JeuxVideo() {
    let apiCall = await fetch('http://localhost:3444/Article')
    let response = await apiCall.json()
    card.innerHTML=""
    response.forEach(article => {
        if(article.category==="jeux_video"){
            if(article.quantity===0){

            }else{
            card.innerHTML +=`<div class="bg-gray-200 rounded text-center m-3 shadow-md p-2 md:w-1/5">
            
            <p class="font-bold">${article.title}</p>
            <img src="../../Back/uploads/${article.image}">
            <p>${article.description}</p>
            <p>${article.category} </p>
            <div class="flex flex-row justify-between">
            <p> disponible : ${article.quantity}</p>
            <p>${article.prix}€</p>
            </div>
            <button class="bg-green-500 m-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="AddArticle('${article.id}')">Louer<button>
            <div>`
            }
        }
    })
}
async function logOut(){
    localStorage.clear()
    window.location.href="../Acceuil/acceuil.html"
}