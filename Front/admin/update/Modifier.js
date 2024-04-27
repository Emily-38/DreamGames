const id =localStorage.getItem('article')

async function AfficherArticleById(){


let apiRequest = await fetch(`http://localhost:3444/Article/${id}`)
let response = await apiRequest.json()

const title= document.querySelector('#title')
const description= document.querySelector('#description')
const quantity= document.querySelector('#quantity')
const category= document.querySelector('#category')
const quantityMax= document.querySelector('#quantityMax')
const prix= document.querySelector('#prix')
const image= document.querySelector('#image')


    title.value=response[0].title
   description.value =response[0].description
   quantity.value= response[0].quantity
   category.value =response[0].category
   quantityMax.value =response[0].quantityMax
   prix.value= response[0].prix
   image.value =response[0].image

}
AfficherArticleById()

async function ModifierArticle(){
    const jwt= localStorage.getItem('jwt')
    let title= document.querySelector('#title').value
    let description= document.querySelector('#description').value
    let image= document.querySelector('#image').value
    let quantity= document.querySelector('#quantity').value
    let quantityMax= document.querySelector('#quantityMax').value
    let category=document.querySelector('#category').value
    let prix= document.querySelector('#prix').value
if(!jwt){
    console.log('erreur')
}

    let article = {
        title: title,
        description: description,
        image: image,
        category: category,
        quantity: quantity,
        quantityMax: quantityMax,
        prix:prix
    }

    let request = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(article),
    }

        const dbUpdate= await fetch(`http://localhost:3444/UpdateArticle/${id}`, request)
        
        
       if(dbUpdate.status === 200){
        localStorage.removeItem('article')
             window.location.href = '../admin.html'
        }else{
            window.location.reload()
        }
    
    
}

