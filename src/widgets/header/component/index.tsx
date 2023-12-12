import React from "react";
import { Outlet } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <div className={'flex bg-cyan-700 text-white uppercase font-bold p-10 justify-center flex-row'}>
        <span className={'text-3xl'}>
          Simple To-do list
        </span>
      </div>
      <Outlet/>
    </>
  );
};
