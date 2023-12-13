const {nanoid} = require("@reduxjs/toolkit");

let db = [
  {
    id: 'newid123123dasf',
    name: 'hello world active',
    createAt: new Date().toString(),
    title: 'best task of the world',
    status: 1,
  },
  {
    id: 'newid123dasf123dfasf',
    name: 'hello world complete',
    createAt: new Date().toString(),
    title: 'best task of the world complete',
    status: 2,
  },
  {
    id: 'newid123123dasffasdf',
    name: 'hello world deleted',
    createAt: new Date().toString(),
    title: 'best task of the world deleted',
    status: 3,
  },
];

const getAll = (req, res) => {
  res.status(200).json(db.filter(({status}) => status !== 3));
};

const createTodo = (req, res) => {
  const name = req.body.name;
  const newTodo = {
    id: nanoid(5),
    name: name,
    createAt: new Date().toString(),
    title: '',
    status: 1,
  };
  db.push(newTodo);
  res.status(201).json({model: newTodo, models: db.filter(({status}) => status !== 3)});
};

const deleteTodo = (req, res) => {
  const deletedId = req.params.id;
  db.map((item) => item.id === deletedId ? item.status = 3 : item.status);
  res.status(200).json(db.filter(({status}) => status !== 3));
};

const editTodo = (req, res) => {
  const editTodo = req.body.item;
  const updatedTaskIdx = db.findIndex(({id}) => id === editTodo.id);
  db[updatedTaskIdx] = editTodo;
  res.status(200).json(editTodo);
};

module.exports = {getAll, createTodo, deleteTodo, editTodo};
