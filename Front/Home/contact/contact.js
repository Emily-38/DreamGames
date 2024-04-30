import transporter from "../../../Back/utils/nodemailer"

const jwt=localStorage.getItem('jwt')
const mail= document.querySelector('#mail')


mail.addEventListener('click', async function (){
const objet =document.querySelector('#objet').value
const message=document.querySelector('#message').value
    let request = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${jwt}`,
      },
    }
    let apiCall = await fetch('http://localhost:3444/profile',request)
    let response = await apiCall.json()
    console.log(response)
    
    const info = await transporter.sendMail({
      from: `"message de bonne reception", <contact@contact.fr>`, 
      to: `${response.email}`, 
      subject: `${objet}`, 
      text: `Bonjour, nous avons bien recu votre message suivant : ${message} `, 
      html: "<b>Hello world?</b>", 
    });
  
    console.log("Message sent: %s", info.messageId);
    alert('message envoyer')
  })
  