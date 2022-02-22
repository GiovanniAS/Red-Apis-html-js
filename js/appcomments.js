const comentarios = document.getElementById('comentarios')
const templateComentario = document.getElementById('template-card-comentario').content
const fragment = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", () => {
    let postid = localStorage.getItem('postid')
    obtenerDatos(postid)
    
})

comentarios.addEventListener('click', e =>{   
    if(e.target.classList.contains(`btn-dark`)){
        window.location.replace('posts.html')
    }
    if(e.target.classList.contains(`btn-primary`)){
        window.location.replace('index.html')
    }
    
})

const obtenerDatos = async (postid) => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}/comments`)
        const data = await res.json()
        pintarComentarios(data)
    }catch (error){
        console.log(error)
    }
}
const pintarComentarios = data =>{
    data.forEach( comm =>{
        templateComentario.querySelector('h5').textContent = comm.name
        templateComentario.querySelector('h6').textContent = comm.email
        templateComentario.querySelector('p').textContent = comm.body
        const clone = templateComentario.cloneNode(true)
        fragment.appendChild(clone)
        
        
    })
    comentarios.appendChild(fragment)
    
}