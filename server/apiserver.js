const express = require('express')
// const history = require('connect-history-api-fallback');
const cors = require('cors');
const {getTodo, getAllTodos , updateTodo, deleteTodo, insertTodo} = require("./apitasks");

const app = express();
app.use(express.json());
app.use(cors());
// app.use(history());

app.get("/api/todos", (req, res) => {
    const todos = getAllTodos();
    res.status(200).send(todos);
})

app.get("/api/todo/:id", (req, res) => {
    const todo = getTodo(req.params.id);
    res.status(200).send(todo);
})

app.delete("/api/todo/:id", (req, res) => {
    deleteTodo(req.params.id);
    res.status(200).send(req.params.id);
})

app.put("/api/todo", (req, res) => {
    req.body.text = safeTrim(req.body.text);
    const todo = updateTodo(req.body);
    res.status(200).send(todo);
})

app.post("/api/todo", (req, res) => {
    req.body.text = safeTrim(req.body.text);
    let todo = insertTodo(req.body);
    res.status(200).send(todo);
})

function safeTrim(text){
    try{
        text = text.trim();
    }
    catch(e){}
    return text;
}

app.listen(8000, () => {
    console.log("Open localhost:8000"); 
    // opn('http://localhost:8000');
});