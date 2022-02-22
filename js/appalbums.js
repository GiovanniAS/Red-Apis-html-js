const albums = document.getElementById('albums')
const templateAlbum = document.getElementById('template-card-album').content
const fragment = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", () => {
    let userid = localStorage.getItem('userid');
    obtenerDatos(userid)
})

albums.addEventListener('click', e =>{   
    mostrarAlbums(e)
    if(e.target.classList.contains(`btn-dark`)){
        window.location.replace('index.html')
    }
    
    if(e.target.classList.contains(`btn-success`)){
        window.location.replace('fotos.html')
    }
    
    
})

const mostrarAlbums = e =>{
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
    localStorage.setItem('albumid',useridd)
    
}

const obtenerDatos = async (userid) => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}/albums`)
        const data = await res.json()
        pintarAlbums(data)
    }catch (error){
        console.log(error)
    }
}
const pintarAlbums = data =>{
    data.forEach( albs =>{
        templateAlbum.querySelector(`.btn-success`).dataset.id = albs.id
        templateAlbum.querySelector('h5').textContent = albs.title
        const clone = templateAlbum.cloneNode(true)
        fragment.appendChild(clone)
        
        
    })
    albums.appendChild(fragment)
    
}