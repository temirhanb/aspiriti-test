import React from "react";
import { CartTaskWidget, CreateTaskWidget, TableWidget } from "../../widgets";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { RootState } from "../../store/store";
import { closeCurrentTask } from "../../store/slices/currentTask";


export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const currentTask = useAppSelector((state: RootState) => state.currentTask)

  const closeForm = () => dispatch(closeCurrentTask())

  return (
    <div className={'flex items-center justify-center h-[100%] flex-col'}>
      <CreateTaskWidget/>
      <TableWidget/>
      {currentTask.isOpen && (
        <>
          <div
            onClick={closeForm}
            className={'flex z-10 fixed p-[100%] '}
          />
          <CartTaskWidget item={currentTask.item}/>
        </>
      )}
    </div>
  )
}
