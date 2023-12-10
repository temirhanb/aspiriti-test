import React from "react";
import { IActor } from "../../../../shared/types/peoples";

export const ActionsTable: React.FC<IActor> = (props) => {
  const {name} = props
  const handlerAddFavorite = (item: IActor) => {
  }
  const handlerDeleteFavorite = (item: IActor) => {
  }

  return (
    <td className={'text-slate-500'}>
      <button type={'submit'} onClick={() => handlerDeleteFavorite(props)}>
        <img src={'../src/shared/assets/remove.png'}
             alt="remove favorite"/>
      </button>
      <button type={'submit'} onClick={() => handlerAddFavorite(props)}>
        <img src={'../src/shared/assets/plus.png'}
             alt="add favorite"/>
      </button>
    </td>
  )
}
