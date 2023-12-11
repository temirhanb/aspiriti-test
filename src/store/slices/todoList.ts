import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

export interface ITodo {
  id: string;
  name: string;
  createAt: string;
  title: string;
  status: number;
}

const initialState = [] as ITodo[]

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setTodoList: (state, action: PayloadAction<ITodo[]>) => {
      return action.payload
    },

    createTodo: (state, action) => {
      const newTodo = {
        id: nanoid(5),
        name: action.payload,
        createAt: new Date().toString(),
        title: '',
        status: 1,
      };
      state.push(newTodo)
    },
    editTodoList: (state, action) => {
      const newTodo = {
        id: nanoid(5),
        name: action.payload,
        createAt: new Date().toString(),
        title: '',
        status: 1,
      };
      state.push(newTodo)
    },
    completeTodoList: (state, action) => {
      const newTodo = {
        id: nanoid(5),
        name: action.payload,
        createAt: new Date().toString(),
        title: '',
        status: 1,
      };
      state.push(newTodo)
    },
    deleteTodoList: (state, action) => {
      const newTodo = {
        id: nanoid(5),
        name: action.payload,
        createAt: new Date().toString(),
        title: '',
        status: 1,
      };
      state.push(newTodo)
    },
  },
})

// Action creators are generated for each case reducer function
export const {setTodoList, createTodo} = todoListSlice.actions

export default todoListSlice.reducer
