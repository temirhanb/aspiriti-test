import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../shared";

export const deleteTodosThunk = createAsyncThunk('todoList/delete', async (id: string) => {
  const {data} = await axios.delete(`${API}/${id}`, {
    headers: {
      "Content-Type": 'application/json',
    }
  });
  return data;
});
