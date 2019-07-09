const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const tareas = [
    {id:1, tarea:'tarea 1', completada:false},
    {id:2, tarea:'tarea 2', completada:false},
    {id:3, tarea:'tarea 3', completada:false},
    {id:4, tarea:'tarea 4', completada:false},
    {id:5, tarea:'tarea 5', completada:false},
    {id:6, tarea:'tarea 6', completada:false},
]

app.get('/api/todos', function(req, res){
    res.json(tareas)
})

app.delete('/api/todos/:id', function(req, res){
    const id = parseInt(req.params.id)

    for(let i=0; i<tareas.length; i++){
        if(tareas[i]=== id){
            tareas.splice(i,1)
        }
    }

    res.json(tareas)
})

let id = 7;

app.post('/api/todos', function(req, res){

    const newToDo = req.body;
    newToDo.id = id++;

    console.log(newToDo)

    tareas.push(newToDo);

    return res.json(newToDo);
})

app.put('/api/todos/:id/completar', function(req, res){

    const id = req.params.id;

    tareas.map(todo => {
        
        if(id == todo.id){

            todo.completada = true;
            return res.json(todo)
        }
    })
})

app.put('/api/todos/:id', function (req, res) {
    const todoId = req.params.id;
    console.log(todoId)
    const todoEditado = req.body; // pueden no llegar todas las propiedades del obj
    console.log(todoEditado)
  
    // si no existe la propiedad texto de nuevoTodo
    // O
    // si la propiedad texto es un string vacio
    if (!todoEditado.tarea || todoEditado.tarea.trim().length === 0) {
      // un aviso
      // un res
      // return
      // return res.status(400).end();
      return res.status(400).send('salió todo mal');
    }
  
    todos.forEach(function (todo) {
      if (todoId == todo.id) {
        todo.tarea = todoEditado.tarea;
        todo.completada = todoEditado.completada;
  
        return res.json(todo);
      }
    });
  });

app.listen(3000)