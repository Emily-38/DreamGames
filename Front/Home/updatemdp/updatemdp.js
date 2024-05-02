async function updatemdp(){
const jwt=localStorage.getItem('jwt')
const password= document.querySelector('#password').value
const passwordBis= document.querySelector('#passwordbis').value
if(password=== passwordBis){
let mdp={
    password:password
}
    let request = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(mdp),
    }
const apiCall= await fetch('http://localhost:3444/updatemdp',request)
const response=  await apiCall.json()

   window.location.href = "../../connexion/connexion.html" 


    

}


}