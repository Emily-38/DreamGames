
async function updateLoc(){
    const jwt= localStorage.getItem('jwt')
    const id= localStorage.getItem('article')
    let date_start=document.querySelector('#date_start').value
    let date_end= document.querySelector('#date_end').value
    if(!jwt){
        console.log('erreur')
    }
    
        let location = {
            date_start: date_start,
            date_end: date_end
        }
        let request = {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(location),
        }
    
            const locUpdate= await fetch(`http://localhost:3444/updateLoc/${id}`, request)
            const response= await locUpdate.json()
            localStorage.removeItem('article')
                window.location.href = '../../admin.html'
           
}
async function logOut(){
    localStorage.clear()
    window.location.href="../Acceuil/acceuil.html"
}