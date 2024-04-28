const profile =document.querySelector('main')
const jwt= localStorage.getItem('jwt')

async function getAllProfile() {
    let request = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${jwt}`,
      },
    }
    let apiCall = await fetch('http://localhost:3444/profile',request)
    let response = await apiCall.json()
    response.forEach(user => {
        profile.innerHTML=`<div class=" bg-gray-300 rounded text-center m-3 shadow-md p-2">
        <p class="text-center font-bold">Profile</p>
        <div class=" bg-gray-200 rounded text-center m-3 shadow-md p-2">
        <p>Nom de Famille</p>
        <p>${user.last_name}</p>
        </div>
        <div class=" bg-gray-200 rounded text-center m-3 shadow-md p-2">
        <p>Prenom</p>
        <p>${user.first_name}</p>
        </div>
        <div class="bg-gray-200 rounded text-center m-3 shadow-md p-2">
        <p>Adresse</p>
        <p>${user.address}</p>
        </div>
        <div class=" bg-gray-200 rounded text-center m-3 shadow-md p-2">
        <p>Email</p>
        <p>${user.email}</p>
        </div>
        
        </div>
        `
    })
}
getAllProfile()
async function modaleLoc(){
    const location=document.querySelector('.location')
 let request = {
     method: 'GET',
     headers: {
       'Content-type': 'application/json; charset=utf-8',
       Authorization: `Bearer ${jwt}`,
   },
 }
 let Location = await fetch(`http://localhost:3444/afficherLocation`, request)
 let response = await Location.json()
 
 response.forEach(loc => {
 location.innerHTML+=`<div class="bg-gray-100 m-2"><p>${loc.title}</p><p>${loc.category}</p>
 <p>${loc.prix}€</p>
 <p>${loc.status}</p>
 ${loc.status==="a valider"?`<div>
 <button onclick="valider('${loc.id}')">Valider</button>
 </div></div>`:""}
 ${loc.status==="en cours"?`<div>
 
 <p>du ${loc.date_start} au ${loc.date_end}</p>
 </div></div>`:""}
 ` 
 //revoir le format de date le button dans home valider finir le test de celui la rajouter un button supprimer
 })
 profile.appendChild(location)
 }
 modaleLoc()

async function valider(id){
localStorage.setItem('article',id)
    window.location.href="../valider/valider.html"


  }