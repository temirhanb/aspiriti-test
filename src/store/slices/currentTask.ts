import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from "./todoList";

export interface ICurrentTask {
  isOpen: boolean;
  item: ITodo;
}


const initialState = {
  isOpen: false,
  item: {} as ITodo
};

export const currentTaskSlice = createSlice({
  name: 'currentTask',
  initialState,
  reducers: {
    setCurrentTask: (state, action: PayloadAction<ITodo>) => {
      state.isOpen = true;
      state.item = action.payload;
    },
    closeCurrentTask: (state) => {
      state.isOpen = false;
      state.item = {} as ITodo;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setCurrentTask, closeCurrentTask} = currentTaskSlice.actions;

export default currentTaskSlice.reducer;
