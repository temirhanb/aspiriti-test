import React from "react";

import { NavLink, Outlet } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <div className={'flex bg-cyan-700 p-10 justify-between flex-row'}>
        <div>
          <NavLink className={'mr-5 text-slate-50 text-xl hover:opacity-70'} to="/favorites">Favorites</NavLink>
          <NavLink className={'text-xl text-slate-50 hover:opacity-70'} to="/peoples">Peoples</NavLink>
        </div>
      </div>
      <Outlet/>
    </>
  )
}