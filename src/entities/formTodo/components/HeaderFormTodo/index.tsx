import React from "react";
import { StatusTaskEnum } from "../../../../shared";

interface IProps {
  closeForm: () => void;
  status: number;
}

export const HeaderFormTodo: React.FC<IProps> = ({closeForm, status}) => {

  return (
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
  );
};
