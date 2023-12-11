import React, { useState } from "react";
import * as Yup from 'yup';
import { ITodo } from "../../../store/slices/todoList";
import { useAppDispatch } from "../../../store/hook";
import { closeCurrentTask, editCurrentTask } from "../../../store/slices/currentTask";
import { CompleteIcon, DeleteIcon, EditIcon, FormAction, StatusTaskEnum } from "../../../shared";
import { useFormik } from "formik";

interface IProps {
  item: ITodo
}


const schema = Yup.object().shape({
  name: Yup
    .string().min(3).max(100).required(),
  title: Yup.string().max(250).required(),
})

export const CartTaskWidget: React.FC<IProps> = ({item}) => {

  const dispatch = useAppDispatch()

  const [currentButtonAction, setCurrentButtonAction] = useState('edit')

  const {name, title, status, id, createAt,} = item

  const closeForm = () => dispatch(closeCurrentTask())

  const handlerEditButton = () => {
    setCurrentButtonAction(FormAction.edit)
  }
  const handlerCompleteButton = () => {
    setCurrentButtonAction(FormAction.completed)
  }
  const handlerDeleteButton = () => {
    setCurrentButtonAction(FormAction.delete)
  }

  const formik = useFormik({
    initialValues: {
      name: name,
      title: title,
    },
    validationSchema: schema,
    onSubmit: (values) => {

      switch (currentButtonAction) {
        case FormAction.edit: {
           dispatch(editCurrentTask({
            id, createAt, status, name: values.name, title: values.title
          }))
          break
        }
        case FormAction.completed: {
           dispatch(editCurrentTask({
            id, createAt, status: StatusTaskEnum.Completed, name: values.name, title: values.title
          }))
          break
        }
        case FormAction.delete: {
           dispatch(editCurrentTask({
            id, createAt, status: StatusTaskEnum.Deleted, name: values.name, title: values.title
          }))
          break
        }
      }
    },
  });

  return (
    <div className={'z-20 absolute left-[50%] translate-x-[-50%] top-[35%] bg-white w-[420px]'}>
      <div className={'mt-[20px] mx-[20px] flex justify-between'}>
          <span>
            Status: {StatusTaskEnum[status]}
          </span>
        <button onClick={closeForm}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
               stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <form onSubmit={formik.handleSubmit} className={'mt-[20px] text-sm mx-[20px]'}>
        <div className={'flex flex-col'}>
          <span>Name:</span>
          <input
            id="name"
            name="name"
            className={'mt-2 outline-none  pl-2 grow border-2'}
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className={'flex flex-col'}>
          <span>Title:</span>
          <textarea
            id="title"
            className={'mt-2  pl-2 grow border-2'}
            name="title"
            cols={30}
            rows={5}
            value={formik.values.name}
            onChange={formik.handleChange}
          >{title}</textarea>
        </div>
        <div className={'flex flex-row justify-between my-3'}>
          <button onClick={handlerEditButton} className={'flex flex-row items-center'}>
            <EditIcon/>
            <span>edit</span>
          </button>
          <button onClick={handlerCompleteButton} className={'flex flex-row items-center'}>
            <CompleteIcon/>
            <span>complete</span>
          </button>
          <button onClick={handlerDeleteButton} className={'flex flex-row items-center'}>
            <DeleteIcon/>
            <span>delete</span>
          </button>
        </div>
      </form>
    </div>
  )
}
