const {Router} = require("express");
const {getAll, createTodo, deleteTodo, editTodo} = require("./controller");

const router = Router();

router.get('/api/todo', getAll);
router.post('/api/todo', createTodo);
router.delete('/api/todo/:id', deleteTodo);
router.put('/api/todo', editTodo);

module.exports = {router};
