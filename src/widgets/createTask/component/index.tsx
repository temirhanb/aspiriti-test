import React from "react";

export const CreateTaskWidget = () => (
  <div className={'w-[720px] flex mt-[20px] flex-row justify-between'}>
    <input className={'outline-none pl-2 grow border-2 border-[#019c2f]'} type="text" placeholder={'Add todo...'}/>
    <button
      className={'flex bg-[#019c2f] w-[100px] hover:opacity-70 items-center justify-center '}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white"
           className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
      </svg>
    </button>
  </div>
);
