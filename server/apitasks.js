const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + '/db.json')
const db = low(adapter)

db.defaults({ todos: [], todoIdInc: 1 })
    .write();


const getAllTodos = () => {
    return db.get("todos")
        .value();
}

const getTodo = id => {
    return db.get("todos")
        .find({id})
        .value();
}

const updateTodo = todo => {
    return db.get("todos")
        .find(id)
        .assign(todo)
        .write()
        .value();
}

const deleteTodo = id => {
    db.get("todos")
        .remove(id)
        .write()
}

const insertTodo = todo => {
    const id = db.get("todoIdInc").value();
    db.update("todoIdInc", n => n+1).write();
    todo = {...todo, id};
    return db.get("todos")
        .push(todo)
        .write()
        .find(x => x.id === id)
}

module.exports = {
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo,
    insertTodo
}