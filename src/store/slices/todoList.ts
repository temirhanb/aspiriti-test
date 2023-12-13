import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTodosThunk } from "../thunks/fetchTodosThunk";
import { editTodosThunk } from "../thunks/editTodoThunk";
import { createTodosThunk } from "../thunks/createTodoThunk";
import { deleteTodosThunk } from "../thunks/deleteTodosThunk";
import { StatusRequest } from "../../shared";

export interface ITodo {
  id: string;
  name: string;
  createAt: string;
  title: string;
  status: number;
}

export interface IInitialState {
  todos: ITodo[];
  status: StatusRequest;
}

const initialState = {
  todos: [] as ITodo[],
  status: StatusRequest.LOADING
} as IInitialState;

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    testAction: () => console.log('slice'),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodosThunk.pending, (state) => {
      state.status = StatusRequest.LOADING;
      state.todos = [];
    });
    builder.addCase(fetchTodosThunk.rejected, (state, action) => {
      state.status = StatusRequest.ERROR;
      state.todos = [];
    });
    builder.addCase(fetchTodosThunk.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
      state.status = StatusRequest.SUCCESS;
      state.todos = action.payload;
    });

    builder.addCase(editTodosThunk.pending, (state) => {
      state.status = StatusRequest.LOADING;
    });
    builder.addCase(editTodosThunk.rejected, (state, action) => {
      state.status = StatusRequest.ERROR;

    });
    builder.addCase(editTodosThunk.fulfilled, (state, action) => {
      state.status = StatusRequest.SUCCESS;
      const completeTodo = action.payload;
      const updatedTaskIdx = state.todos.findIndex(({id}) => id === completeTodo.id);
      state.todos[updatedTaskIdx] = completeTodo;
      return state;
    });

    builder.addCase(createTodosThunk.pending, (state) => {
      state.status = StatusRequest.LOADING;

    });
    builder.addCase(createTodosThunk.rejected, (state, action) => {
      state.status = StatusRequest.ERROR;
    });
    builder.addCase(createTodosThunk.fulfilled, (state, action) => {
      state.status = StatusRequest.SUCCESS;
      state.todos.push(action.payload);
    });

    builder.addCase(deleteTodosThunk.pending, (state) => {
      state.status = StatusRequest.LOADING;
    });
    builder.addCase(deleteTodosThunk.rejected, (state, action) => {
      state.status = StatusRequest.ERROR;
    });
    builder.addCase(deleteTodosThunk.fulfilled, (state, action) => {
      state.status = StatusRequest.SUCCESS;

      state.todos = action.payload;
    });
  },
});

export default todoListSlice.reducer;
