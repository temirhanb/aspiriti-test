import React from "react";
import { CreateTaskWidget, TableWidget } from "../../widgets";


export const MainPage: React.FC = () => {

  return (
    <div className={'flex items-center justify-center  flex-col'}>
      <CreateTaskWidget/>
      <TableWidget/>
    </div>

  )
}
