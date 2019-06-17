console.log('Hola Mundo')

const dire = 'http://localhost:3000/api/todos'

fetch(dire)
.then(function (res) {
    return res.json()  
})

.then (function(tareas){
    const li = tareas.map(e=>{
        return`<li id='${e.id}'>
            ${e.tarea} <span>${e.completada}</span>
            <button>Eliminar</button>
            </li>`
    })

    document.querySelector('ul').innerHTML = li.join('')

    document
    .querySelectorAll('li button')
    .forEach(boton=>{
        boton.onclick = eliminar;
    })
})

function eliminar (e){
    const id =  e.target.parentNode.id;
    
    fetch(`${dire}/${id}`,{method:'delete'})
    .then(res=>document.getElementById(id).remove())
}