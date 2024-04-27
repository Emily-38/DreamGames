
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
        card.innerHTML +=`<div class="w-1/5 bg-gray-200 rounded text-center m-3 shadow-md p-2">
        
        <p class="font-bold">${article.title}</p>
        <img src="${article.image}">
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


//
async function AddArticle(id){
    let apiCall = await fetch(`http://localhost:3444/addLocation/${id}`)
    let response = await apiCall.json()

}