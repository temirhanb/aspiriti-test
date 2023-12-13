import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import { useAppDispatch } from "../../../../store/hook";
import { ITodo } from "../../../../store/slices/todoList";
import { CompleteIcon, DeleteIcon, EditIcon, FormAction } from "../../../../shared";
import { editTodosThunk } from "../../../../store/thunks/editTodoThunk";
import { deleteTodosThunk } from "../../../../store/thunks/deleteTodosThunk";

interface IProps {
  item: ITodo;
  closeForm: () => void;
}

export const FormTodo: React.FC<IProps> = ({item, closeForm}) => {

  const dispatch = useAppDispatch();

  const [currentButtonAction, setCurrentButtonAction] = useState('edit');

  const {name, title, status, id, createAt} = item;

  const formik = useFormik({
    initialValues: {
      name: name,
      title: title,
    },
    validationSchema: Yup.object().shape({
      name: Yup
        .string().min(3).max(100).required(),
      title: Yup.string().max(250),
    }),
    onSubmit: (values) => {

      switch (currentButtonAction) {
        case FormAction.edit: {

          const editTodo = {
            id, createAt, status, name: values.name, title: values.title
          };
          dispatch(editTodosThunk(editTodo));

          closeForm();
          break;
        }
        case FormAction.completed: {

          const completeTodo = {
            id, createAt, status: 2, name: values.name, title: values.title
          };
          dispatch(editTodosThunk(completeTodo));

          closeForm();
          break;
        }
        case FormAction.delete: {
          dispatch(deleteTodosThunk(id));

          closeForm();
          break;
        }
      }
      formik.resetForm();
    },
  });

  const handlerEditButton = () => {
    setCurrentButtonAction(FormAction.edit);
  };
  const handlerCompleteButton = () => {
    setCurrentButtonAction(FormAction.completed);
  };
  const handlerDeleteButton = () => {
    setCurrentButtonAction(FormAction.delete);
  };

  return (
    <form onSubmit={formik.handleSubmit} className={'mt-[20px] text-sm mx-[20px]'}>
      <div className={'flex flex-col'}>
        <span>Name:</span>
        <input
          id="name"
          name="name"
          className={
            `mt-2 outline-none 
              ${formik.errors.name ? 'border-[#B9031EFF]' : ''}
            pl-2 grow border-2`
          }
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <p className={"text-[#B9031EFF]"}>{formik.errors.name}</p>
      </div>
      <div className={'flex flex-col'}>
        <span>Title:</span>
        <textarea
          id="title"
          className={
            `mt-2 outline-none 
              ${formik.errors.title ? 'border-[#B9031EFF]' : ''}
            pl-2 grow border-2`
          }
          name="title"
          cols={30}
          rows={5}
          value={formik.values.title}
          onChange={formik.handleChange}
        >{title}</textarea>
        <p className="text-[#B9031EFF]">{formik.errors.title}</p>
      </div>
      <div className={'flex flex-row justify-between my-3'}>
        <button onMouseOver={handlerEditButton} type={'submit'} className={'flex flex-row items-center'}>
          <EditIcon/>
          <span className={'text-[#0384B9FF]'}>Edit</span>
        </button>
        <button onMouseOver={handlerCompleteButton} type={'submit'} className={'flex flex-row items-center '}>
          <CompleteIcon/>
          <span className={'text-[#00CC439D]'}>Complete</span>
        </button>
        <button onMouseOver={handlerDeleteButton} type={'submit'} className={'flex flex-row items-center'}>
          <DeleteIcon/>
          <span className={'text-[#B9031EFF]'}>Delete</span>
        </button>
      </div>
    </form>
  );
};
