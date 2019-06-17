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
app.listen(3000)