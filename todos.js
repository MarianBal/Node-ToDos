console.log('Hola Mundo')

const dire = 'http://localhost:3000/api/todos'

let listaTareas = [];

// fetch(dire)
// .then(function (res) {
//     return res.json()  
// })

// .then (function(tareas){

//     listaTareas = tareas;

//     const li = tareas.map(e=>{
//         return`<li id='${e.id}'> <span class="titulo">
//             ${e.tarea}</span> <span class="estado">${e.completada}</span>
//             <button class="eliminar">Eliminar</button>
//             <button onclick="completar(${e.id}, this)"> completada</button>
//             <button onclick="editar(${e.id}, this)"> Editar</button>

//             </li>`
//     })

//     document.querySelector('ul').innerHTML = li.join('')

//     document
//     .querySelectorAll('li button')
//     .forEach(boton=>{
//         boton.onclick = eliminar;
//     })
// })
function editar (id, button){
    listaTareas.forEach(tarea=>{

        if(tarea.id === id){
            document
                .querySelector('#input')
                .value = tarea.tarea;
            
            document
                .querySelector('#subir')
                .style.display= 'none';

            const botonEditar = document.querySelector('#editar')
            botonEditar.style.display= 'block';

            botonEditar.onclick = function(e){

                e.preventDefault();

                const texto = document.querySelector('#input').value;

                const todoNuevo = {
                    tarea: texto,
                    completada: false,
                }

                fetch(`${dire}/${id}`, {
                    method: 'put',
                    body: JSON.stringify(todoNuevo),
                    headers: {
                        'Content-Type': 'application/json'
                      }
                })
                .then(res=> res.json())
                .then(data=>{

                    button.parentNode.querySelector('span.titulo').innerHTML= todo.texto;   
                })
            }
        }
    })
}
function completar(id, button){
    console.log(id, button)

    fetch(`${dire}/${id}/completar`, {
        method: 'put'
    })
    .then(res => res.json())
    .then(todo=>{

        const li =document.getElementById(`${id}`)

        li
            .querySelector('span.estado')
            .innerHTML= todo.completada;

    })
    
}

// function eliminar (e){

//      const id =  e.target.parentNode.id;
    
//     fetch(`${dire}/${id}`,{method:'delete'})
//     .then(res=>document.getElementById(id).remove())
// }

document.getElementById('tareaNueva').onsubmit = e =>{
    e.preventDefault();

    const texto = document.querySelector('#input').value;

    if (texto.trim().length===0){ 
        document.querySelector('#input').value = 'Dato no válido'
    }else{

    const todoNuevo = {
        tarea: texto,
        completada: false,
    };

    fetch(dire, {
        method: 'post',
        body: JSON.stringify(todoNuevo),
        headers: {
          'Content-Type': 'application/json'
        }
    })
      .then(res => res.json())
      .then(e => {
          console.log(e)
        const nuevaTarea= `
        <li id='${e.id}'><span class="titulo">
        ${e.tarea} </span><span>${e.completada}</span>
        <button onclick="completar(${e.id}, this)"> completada</button>
        <button onclick="editar(${e.id}, this)"> Editar</button>
        </li>`
    
        document.querySelector('ul').innerHTML += nuevaTarea;
    
      })
    }
    }
