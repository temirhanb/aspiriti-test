import React, { useState } from "react";
import { ITodo } from "../../../../store/slices/todoList";
import { useAppDispatch } from "../../../../store/hook";
import { setCurrentTask } from "../../../../store/slices/currentTask";
import { EditIcon } from "../../../../shared";


interface IProps {
  item: ITodo;
}

export const ContentTable: React.FC<IProps> = ({item}) => {

  const dispatch = useAppDispatch();

  const [hoverState, setHoverState] = useState(false);

  const handlerSetActor = () => {
    dispatch(setCurrentTask(item));
  };

  return (
    <tr
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      onClick={handlerSetActor}
      className={
        `h-14 border-t-2 ${item.status === 2 ?
          'bg-[#00CC431F] border-[#00CC4349]' :
          ''}
         flex items-center  hover:opacity-70 cursor-pointer`
      }
    >
      <td className={'text-slate-800 grow'}>
        {item.name}
      </td>
      <td className={`${hoverState ? 'flex' : 'hidden'}`}>
        <EditIcon/>
      </td>
    </tr>
  );
};
