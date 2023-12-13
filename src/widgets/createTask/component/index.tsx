import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from '../../../store/hook';
import { CreateIcon } from "../../../shared";
import { createTodosThunk } from "../../../store/thunks/createTodoThunk";

export const CreateTaskWidget: React.FC = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup
        .string().min(3).max(100).required(),
    }),
    onSubmit: (values) => {
      dispatch(createTodosThunk(values.name));
      formik.resetForm();
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={'flex mt-[20px]  w-[320px] sm:w-[520px] md:w-[720px] flex-row justify-between'}
    >
      <input
        id="name"
        name="name"
        className={
          `outline-none pl-2 grow border-2 ${formik.errors.name ? 'border-[#B9031EFF]' : 'border-[#019c2f]'}`
        }
        type="text"
        placeholder={'Add todo...'}
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <button
        type={'submit'}
        className={`
        flex ${formik.errors.name ? 'bg-[#B9031EFF]' : 'bg-[#019c2f]'} w-[100px] hover:opacity-70 items-center justify-center
        `}
      >
        <CreateIcon/>
      </button>
    </form>
  );
};
