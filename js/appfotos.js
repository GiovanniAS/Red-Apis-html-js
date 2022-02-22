const fotos = document.getElementById('fotos')
const templateFoto = document.getElementById('template-card-foto').content
const fragment = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", () => {
    let albumid = localStorage.getItem('albumid');
    obtenerDatos(albumid)
    
})

fotos.addEventListener('click', e =>{   
    if(e.target.classList.contains(`btn-dark`)){
        window.location.replace('albums.html')
    }
    if(e.target.classList.contains(`btn-primary`)){
        window.location.replace('index.html')
    }
    
})

const obtenerDatos = async (albumid) => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumid}/photos`)
        const data = await res.json()
        pintarFotos(data)
    }catch (error){
        console.log(error)
    }
}
const pintarFotos = data =>{
    data.forEach( fots =>{
        templateFoto.querySelector('h5').textContent = fots.title
        templateFoto.querySelector('img').setAttribute('src' ,fots.url)
        const clone = templateFoto.cloneNode(true)
        fragment.appendChild(clone)
        
        
    })
    fotos.appendChild(fragment)
    
}