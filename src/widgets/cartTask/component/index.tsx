import React from "react";
import { ITodo } from "../../../store/slices/todoList";
import { useAppDispatch } from "../../../store/hook";
import { closeCurrentTask } from "../../../store/slices/currentTask";
import { FormTodo, HeaderFormTodo } from "../../../entities";

interface IProps {
  item: ITodo;
}


export const CartTaskWidget: React.FC<IProps> = ({item}) => {

  const dispatch = useAppDispatch();

  const closeForm = () => dispatch(closeCurrentTask());

  return (
    <div
      className={'z-20 absolute left-[50%] custom-shadow translate-x-[-50%] top-[35%] bg-white w-[300px]  sm:w-[420px]'}>
      <HeaderFormTodo status={item.status} closeForm={closeForm}/>
      <FormTodo item={item} closeForm={closeForm}/>
    </div>
  );
};
