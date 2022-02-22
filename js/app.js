const usuarios = document.getElementById('usuarios')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", () => {
    obtenerDatos()
    pintarUsuarios()
    
})


usuarios.addEventListener('click', e =>{
    mostrarPosts(e)
    
    let info=document.querySelectorAll(`#template-card-info`)[e.target.dataset.id-1];
    
    if(e.target.classList.contains(`btn-info`)){
        if(info.getAttribute(`style`)==`display: none;`){
            info.style.display=`inline-block`
        }
        else{
            info.style.display=`none`;
        }
    }
    
    if(e.target.classList.contains(`btn-primary`)){
        window.location.replace('posts.html')
    }

    if(e.target.classList.contains(`btn-secondary`)){
        window.location.replace('albums.html')
    }
    
    if(e.target.classList.contains(`btn-warning`)){
        window.location.replace('todos.html')
    }
    
})


const mostrarPosts = e =>{
    if(e.target.classList.contains('btn-primary')){
        setPU(e.target.parentElement)
    }
    if(e.target.classList.contains('btn-secondary')){
        setPU(e.target.parentElement)
    }
    if(e.target.classList.contains('btn-warning')){
        setPU(e.target.parentElement)
    }
    e.stopPropagation()
}

const setPU = objeto =>{
    const postu={
        username: objeto.querySelector('h3').textContent,
        name: objeto.querySelector('h6').textContent,
        id: objeto.querySelector('button').dataset.id
    }  
    useridd = postu.id
    localStorage.setItem('userid',useridd)
    
}


const obtenerDatos = async () => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        pintarUsuarios(data)
    }catch (error){
        console.log(error)
    }
}

const pintarUsuarios = data =>{
    data.forEach( usuario =>{
        templateCard.querySelector(`.btn-primary`).dataset.id = usuario.id
        templateCard.querySelector(`.btn-secondary`).dataset.id = usuario.id
        templateCard.querySelector(`.btn-warning`).dataset.id = usuario.id
        templateCard.querySelector(`.btn-info`).dataset.id = usuario.id
        templateCard.querySelector('h3').textContent = usuario.username
        templateCard.querySelector('h6').textContent = usuario.name
        templateCard.querySelector('p').textContent = usuario.email
        templateCard.querySelector(`#template-card-info`).innerHTML=`<span style="font-weight:bold">Address: </span>
        <div>${usuario.address.street}</div>
        <div>${usuario.address.suite}</div>
        <div>${usuario.address.city}</div>
        <div>${usuario.address.zipcode}</div>
        <div>${usuario.phone}</div>
        <div>${usuario.website}</div>
        <br>
        <span style="font-weight:bold">Company: </span>
        <div>${usuario.company.name}</div>
        <div>${usuario.company.catchPhrase}</div>
        <div>${usuario.company.bs}</div>
        <br><br><br>
        `
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
        
        
    })
    usuarios.appendChild(fragment)
    
}