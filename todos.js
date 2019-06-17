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

document.getElementById('tareaNueva').onsubmit = e =>{
    e.preventDefault();

    const texto = document.querySelector('#input').value;

    const todoNuevo = {
        texto: texto,
        completada: false,
    }

    fetch(dire, { 
        method: 'POST',
        body: JSON.stringify(todoNuevo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(todo => {
        const nuevaTarea= `
        <li id='${todo.id}'>
        ${todo.tarea} <span>${todo.completada}</span>
        <button>Eliminar</button>
        </li>`
    
    
        document.querySelector('ul').innerHTML += nuevaTarea;
    
      })
    
    }
