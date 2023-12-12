import axios from "axios";
import { ITodo } from "../../../store/slices/todoList";
import { API } from "../../../shared";

export const postCreateTodo = async (name: string): Promise<ITodo> => {
  try {
    const {data} = await axios.post(API, {name}, {
      headers: {
        "Content-Type": 'application/json',
      }
    });
    return data.model;
  } catch (e) {
    throw (e);
  }
};
