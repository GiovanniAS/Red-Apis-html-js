const posts = document.getElementById('posts')
const templatePost = document.getElementById('template-card-post').content
const fragment = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", () => {
    let userid = localStorage.getItem('userid');
    obtenerDatos(userid)
})

posts.addEventListener('click', e =>{   
    mostrarPosts(e)
    if(e.target.classList.contains(`btn-dark`)){
        window.location.replace('index.html')
    }
    
    if(e.target.classList.contains(`btn-success`)){
        window.location.replace('comments.html')
    }
    
})

const mostrarPosts = e =>{
    if(e.target.classList.contains('btn-success')){
        setPU(e.target.parentElement)
    }
    e.stopPropagation()
}

const setPU = objeto =>{
    const postu={
        id: objeto.querySelector('button').dataset.id
    }
    
    useridd = postu.id
    localStorage.setItem('postid',useridd)
    
}

const obtenerDatos = async (userid) => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
        const data = await res.json()
        pintarPost(data)
    }catch (error){
        console.log(error)
    }
}
const pintarPost = data =>{
    data.forEach( pots =>{
        templatePost.querySelector(`.btn-success`).dataset.id = pots.id
        templatePost.querySelector('h5').textContent = pots.title
        templatePost.querySelector('p').textContent = pots.body
        const clone = templatePost.cloneNode(true)
        fragment.appendChild(clone)
        
        
    })
    posts.appendChild(fragment)
    
}