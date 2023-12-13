import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../shared";
import { ITodo } from "../slices/todoList";

export const editTodosThunk = createAsyncThunk('todoList/edit', async (item: ITodo) => {
  const {data} = await axios.put<ITodo>(API, {
    item
  });
  return data;
});
