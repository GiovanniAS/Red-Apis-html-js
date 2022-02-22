const todos = document.getElementById('todos')
const templateTodo= document.getElementById('template-card-todo').content
const fragment = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", () => {
    let userid = localStorage.getItem('userid');
    obtenerDatos(userid)   
})

todos.addEventListener('click', e =>{   
    if(e.target.classList.contains(`btn-dark`)){
        window.location.replace('index.html')
    }
    
})

const obtenerDatos = async (userid) => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}/todos`)
        const data = await res.json()
        pintarPost(data)
    }catch (error){
        console.log(error)
    }
}
const pintarPost = data =>{
    data.forEach( tods =>{
        templateTodo.querySelector('h3').textContent = tods.title
        templateTodo.querySelector('p').textContent = tods.completed
        const clone = templateTodo.cloneNode(true)
        fragment.appendChild(clone)
        
        
    })
    todos.appendChild(fragment)
    
}