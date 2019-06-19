const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

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
    const id = parseInt(req.params.todoId)

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

    tareas.push(nuevoTodo);

    return res.json(nuevoTodo);
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
app.listen(3000)