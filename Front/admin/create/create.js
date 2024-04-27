const title= document.querySelector('#title').value
const description= document.querySelector('#description').value
const quantity= document.querySelector('#quantity').value
const category= document.querySelector('#category').value
const quantityMax= document.querySelector('#quantityMax').value
const prix= document.querySelector('#prix').value
const image= document.querySelector('#image')
const ajouter= document.querySelector('#ajouter')
const jwt= localStorage.getItem('jwt')


ajouter.addEventListener('click', async function(event){
  event.preventDefault()
  try{
console.log("debut de la fonction")
    const formData = new FormData();

    formData.append('image', image.files[0])
  
    const response = await fetch("http://localhost:3444/insert/picture", {
      method: "POST",
     
      body: formData,
    })
    let data = await response.json()
    
    if (response.status === 200) {
      let uploadedImage = data.newFileName
      ajoutArticle(uploadedImage)
    return
    } 
    }
      catch(err){
      console.log(err)
      }
    }
    )

    

async function ajoutArticle(uploadedImage){


  let Article = {
    title: title,
    description: description ,
    quantity: quantity,
    category: category,
    quantityMax: quantityMax,
    prix: prix,
    image: uploadedImage,
}

let request = {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${jwt}`,
},
  body: JSON.stringify(Article),
}

const responsebis = await fetch(
  'http://localhost:3444/createArticle',
  request
)
if(responsebis.status === 200){     
// window.location.href="../admin.html" 
alert("reussie")
  
   
     
  }

}