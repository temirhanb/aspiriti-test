import React from "react";
import { Route, Routes } from "react-router-dom";

import { MainPage, NotFoundPage } from "../pages";
import { Header } from "../widgets";
import './index.css';

export const App: React.FC = () => {

  return (
    <div className="flex flex-col">
      <Routes>
        <Route path={'/'} element={<Header/>}>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </div>
  );
};
