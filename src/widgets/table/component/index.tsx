import React, { useEffect } from "react";
import { ContentTable, HeadersTable } from "../../../entities";
import { Preloader } from "../../../shared";
import { RootState } from "../../../store/store";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { fetchTodosThunk } from "../../../store/thunks/fetchTodosThunk";

export const TableWidget = () => {
  const dispatch = useAppDispatch();

  const {todos} = useAppSelector((state: RootState) => state.todoList);

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, []);

  if (todos.length === 0) {
    return <div className={'flex h-[200px] justify-center items-center'}><Preloader/></div>;
  }

  return (
    <table>
      <tbody className={'mt-10 flex flex-col w-[320px] sm:w-[520px] md:w-[720px]'}>
      <HeadersTable/>
      {todos.map((item, index) => (
        <ContentTable
          key={item.id + index}
          item={item}
        />
      ))}
      </tbody>
    </table>
  );
};
