import React, { useEffect } from "react";
import { ContentTable, HeadersTable } from "../../../entities";
import { Preloader } from "../../../shared";
import { RootState } from "../../../store/store";
import { setTodoList } from "../../../store/slices/todoList";
import { useAppDispatch, useAppSelector } from "../../../store/hook";

export const TableWidget = () => {
  const dispatch = useAppDispatch()
  const todoList = useAppSelector((state: RootState) => state.todoList)

  useEffect(() => {
    dispatch(setTodoList([
      {
        id: 'newid123123dasf',
        name: 'hello world active',
        createAt: new Date().toString(),
        title: 'best task of the world',
        status: 1,
      },
      {
        id: 'newid123dasf123dfasf',
        name: 'hello world complete',
        createAt: new Date().toString(),
        title: 'best task of the world complete',
        status: 2,
      },
      {
        id: 'newid123123dasffasdf',
        name: 'hello world deleted',
        createAt: new Date().toString(),
        title: 'best task of the world deleted',
        status: 3,
      },
    ]))
  }, [])

  if (todoList.length === 0) {
    return <div className={'flex h-[200px] justify-center items-center'}><Preloader/></div>
  }

  return (
    <table>
      <tbody className={'mt-10 flex flex-col w-[320px] sm:w-[520px] md:w-[720px]'}>
      <HeadersTable/>
      {todoList.map((item, index) => (
        <ContentTable
          key={item.id + index}
          item={item}
        />
      ))}
      </tbody>
    </table>
  )
}
