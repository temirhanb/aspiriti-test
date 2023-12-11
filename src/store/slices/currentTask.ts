import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from "./todoList";

export interface ICurrentTask {
  isOpen: boolean;
  item: ITodo
}


const initialState = {
  isOpen: false,
  item: {} as ITodo
}

export const currentTaskSlice = createSlice({
  name: 'currentTask',
  initialState,
  reducers: {
    setCurrentTask: (state, action: PayloadAction<ITodo>) => {
      state.isOpen = !state.isOpen
      state.item = action.payload
    },
    closeCurrentTask: (state) => {
      state.isOpen = false
    },
    editCurrentTask: (state, action: PayloadAction<ITodo>) => {
      state.isOpen = false
      state.item = {...state.item, ...action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const {setCurrentTask, closeCurrentTask, editCurrentTask} = currentTaskSlice.actions

export default currentTaskSlice.reducer
