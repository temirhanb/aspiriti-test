import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../shared";
import { ITodo } from "../slices/todoList";

export const fetchTodosThunk = createAsyncThunk<ITodo[]>('todoList/fetch', async () => {
  const {data} = await axios.get<ITodo[]>(API);

  return data;
});
