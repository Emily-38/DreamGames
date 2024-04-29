const profile =document.querySelector('main')
const jwt= localStorage.getItem('jwt')

async function getAllProfile() {
    const locations=document.querySelector('.location')
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
    
    let requestbis = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${jwt}`,
      },
    }
    let Location = await fetch(`http://localhost:3444/afficherLocation`, requestbis)
    let responsebis = await Location.json()
    
    responsebis.forEach(loc => {
    locations.innerHTML+=`<div class="bg-gray-100 m-2"><p>${loc.title}</p><p>${loc.category}</p>
    <p>${loc.prix}€</p>
    <p>${loc.status}</p>
    ${loc.status==="a valider"?`<div>
    <button class="bg-green-500 m-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="valider('${loc.id}')">Valider</button>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="deleteLoc(${loc.id})">Supprimer</button>
    </div></div>`:""}
    ${loc.status==="en cours"?`<div>
    
    <p>du ${loc.date_start} au ${loc.date_end}</p>
    </div></div>
    `:""}
    ` 
    
    })
    profile.appendChild(locations)
}
getAllProfile()




async function valider(id){
localStorage.setItem('article',id)
    window.location.href="../valider/valider.html"
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

//   <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="deleteLocAddQuantity(${loc.id})">Supprimer</button>
// async function deleteLocAddQuantity(id){
// let request = {
//     method: 'PATCH',
//     headers: {
//       'Content-type': 'application/json; charset=utf-8',
//       Authorization: `Bearer ${jwt}`,
//   },
// }
// let Location = await fetch(`http://localhost:3444/addArticle/${id}`, request)
// let request1 = {
//     method: 'DELETE',
//     headers: {
//       'Content-type': 'application/json; charset=utf-8',
//       Authorization: `Bearer ${jwt}`,
//   },
// }
// let deleteLocation = await fetch(`http://localhost:3444/supprLoc/${id}`, request1)
// let responsedelete = await deleteLocation.json()
//         window.location.reload() 
//     return
// }
    


