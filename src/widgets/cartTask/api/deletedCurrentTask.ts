import axios from "axios";
import { API } from "../../../shared";
import { ITodo } from "../../../store/slices/todoList";

export const deletedCurrentTask = async (id: string): Promise<ITodo[]> => {
  try {
    const {data} = await axios.delete(`${API}/${id}`, {
      headers: {
        "Content-Type": 'application/json',
      }
    })
    return data
  } catch (e) {
    throw (e)
  }
}
