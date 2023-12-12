import { ITodo } from "../../../store/slices/todoList";
import axios from "axios";
import { API } from "../../../shared";

export const editCurrentTaskPut = async (item: ITodo): Promise<ITodo> => {
  try {
    const {data} = await axios.put(API, {
      item
    })
    return data
  } catch (e) {
    throw (e)
  }
}
