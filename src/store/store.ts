import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './slices/todoList';
import currentTaskReducer from './slices/currentTask';


export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
    currentTask: currentTaskReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
