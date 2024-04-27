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
       
        card.innerHTML +=`
        <div class="w-1/5 bg-gray-200 rounded text-center m-3 shadow-md p-2">
        
        <p class="font-bold">${article.title}</p>
        <img src="../../Back/uploads/${article.image}">
        <p>${article.description}</p>
        <p>${article.category} </p>
        <div class="flex flex-row justify-between">
        ${article.quantity === 0 ?`<p class="text-red-600"> Indisponible</p>`: `<p> disponible : ${article.quantity}</p>`}
        
        <p>${article.prix}€</p>
        </div>
        <button class="bg-green-500 m-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="ModifierArticle('${article.id}')">Modifier<button>
        <button class="bg-red-500 m-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="DeleteArticle('${article.id}')">Supprimer<button>
        <div>`
        
    });
}
getAllArticles()

async function ModifierArticle(id){
    localStorage.setItem("article", id)
    window.location.href="./update/ModifierArticle.html"
}
async function DeleteArticle(id){
    const jwt= localStorage.getItem('jwt')

    if(!jwt){
        console.log('jwt invalide')
    }

    let request = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${jwt}`,
        },
    }
    await fetch(`http://localhost:3444/delete/${id}`, request)
   
    window.location.reload()
    
}


async function Consoles() {
    let apiCall = await fetch('http://localhost:3444/Article')
    let response = await apiCall.json()
    card.innerHTML=""
    response.forEach(article => {
        if(article.category==="console"){
       
        card.innerHTML +=`
        <div class="w-1/5 bg-gray-200 rounded text-center m-3 shadow-md p-2">
        
        <p class="font-bold">${article.title}</p>
        <img src="../../Back/uploads/${article.image}">
        <p>${article.description}</p>
        <p>${article.category} </p>
        <div class="flex flex-row justify-between">
        ${article.quantity === 0 ?`<p class="text-red-600"> Indisponible</p>`: `<p> disponible : ${article.quantity}</p>`}
        
        <p>${article.prix}€</p>
        </div>
        <button class="bg-green-500 m-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="ModifierArticle('${article.id}')">Modifier<button>
        <button class="bg-red-500 m-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="DeleteArticle('${article.id}')">Supprimer<button>
        <div>`
        }
    });
}

async function Accessoire() {
    let apiCall = await fetch('http://localhost:3444/Article')
    let response = await apiCall.json()
    card.innerHTML=""
    response.forEach(article => {
        if(article.category==="Accessoires"){
       
        card.innerHTML +=`
        <div class="w-1/5 bg-gray-200 rounded text-center m-3 shadow-md p-2">
        
        <p class="font-bold">${article.title}</p>
        <img src="../../Back/uploads/${article.image}">
        <p>${article.description}</p>
        <p>${article.category} </p>
        <div class="flex flex-row justify-between">
        ${article.quantity === 0 ?`<p class="text-red-600"> Indisponible</p>`: `<p> disponible : ${article.quantity}</p>`}
        
        <p>${article.prix}€</p>
        </div>
        <button class="bg-green-500 m-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="ModifierArticle('${article.id}')">Modifier<button>
        <button class="bg-red-500 m-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="DeleteArticle('${article.id}')">Supprimer<button>
        <div>`
        }
    });
}

async function JeuxVideo(){
    let apiCall = await fetch('http://localhost:3444/Article')
    let response = await apiCall.json()
    card.innerHTML=""
    response.forEach(article => {
        if(article.category==="JeuxVideo"){
        card.innerHTML +=`<div class="w-1/5 bg-gray-200 rounded text-center m-3 shadow-md p-2">
        
        <p class="font-bold">${article.title}</p>
        <img src="../../Back/uploads/${article.image}">
        <p>${article.description}</p>
        <p>${article.category} </p>
        <div class="flex flex-row justify-between">
        ${article.quantity === 0 ?`<p class="text-red-600"> Indisponible</p>`: `<p> disponible : ${article.quantity}</p>`}
        
        <p>${article.prix}€</p>
        </div>
        <button class="bg-green-500 m-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="ModifierArticle('${article.id}')">Modifier<button>
        <button class="bg-red-500 m-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="DeleteArticle('${article.id}')">Supprimer<button>
        <div>`
        }
    });
}