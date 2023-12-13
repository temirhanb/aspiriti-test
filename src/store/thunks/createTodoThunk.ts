import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../shared";

export const createTodosThunk = createAsyncThunk('todoList/create', async (name: string) => {
  const {data} = await axios.post(API, {name}, {
    headers: {
      "Content-Type": 'application/json',
    }
  });
  return data.model;
});
