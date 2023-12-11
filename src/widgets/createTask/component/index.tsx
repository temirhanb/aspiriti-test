import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hook";
import { createTodo } from "../../../store/slices/todoList";
import { CreateIcon } from "../../../shared";

export const CreateTaskWidget: React.FC = () => {
  const dispatch = useAppDispatch()

  const [value, setValue] = useState('')
  const handlerCreateTask = () => {
    dispatch(createTodo(value))
  }

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={'flex mt-[20px]  w-[320px] sm:w-[520px] md:w-[720px] flex-row justify-between'}>
      <input value={value} onChange={changeInput} className={'outline-none pl-2 grow border-2 border-[#019c2f]'}
             type="text" placeholder={'Add todo...'}/>
      <button
        onClick={handlerCreateTask}
        className={'flex bg-[#019c2f] w-[100px] hover:opacity-70 items-center justify-center '}
      >
        <CreateIcon/>
      </button>
    </div>
  )
};
