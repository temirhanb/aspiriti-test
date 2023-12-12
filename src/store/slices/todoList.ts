import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITodo {
  id: string;
  name: string;
  createAt: string;
  title: string;
  status: number;
  subtask?: {
    index: number;

  };
}

const initialState = [] as ITodo[];

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setTodoList: (state, action: PayloadAction<ITodo[]>) => {
      return action.payload;
    },

    createTodo: (state, action) => {

      state.push(action.payload);
    },
    editTodoList: (state, action) => {
      console.log(action.payload);
      const completeTodo = action.payload;
      const updatedTaskIdx = state.findIndex(({id}) => id === completeTodo.id);
      state[updatedTaskIdx] = completeTodo;
      return state;
    },

    deleteTodoList: (state, action: PayloadAction<ITodo[]>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setTodoList, createTodo, deleteTodoList, editTodoList} = todoListSlice.actions;

export default todoListSlice.reducer;
