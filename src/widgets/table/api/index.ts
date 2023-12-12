import axios from "axios";
import { ITodo } from "../../../store/slices/todoList";
import { API } from "../../../shared";

export const getAllTodoList = async (): Promise<ITodo[]> => {
  const {data} = await axios.get(API, {
    headers: {
      "Content-Type": 'application/json',
    }
  })

  return data
}
