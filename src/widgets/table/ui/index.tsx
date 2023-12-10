import React, { useState } from "react";
import { nanoid } from "nanoid";
import { ContentTable, HeadersTable } from "../../../entities";
import { Preloader } from "../../../shared";

export const TableWidget = () => {

  const [currentPage, setCurrentPage] = useState(2)
  const [fetching, setFetching] = useState(false)

  const scrollHandler = () => {
    if (document.documentElement.scrollHeight -
      (document.documentElement.scrollTop + window.innerHeight) < 30
      // &&
      // peoplesStore.peoples.length < peoplesStore.count
    ) {
      setFetching(true)
    }

  }
  const hide = false
  if (!hide) {
    return <div className={'flex h-[200px] justify-center items-center'}><Preloader/></div>
  }

  return (
    <div className={'m-10 flex flex-col'}>
      <table>
        <tbody>
        <HeadersTable/>
        <ContentTable
          data-testid={'peoples'}
          key={nanoid(5)}
          id={132}
          actor={'fads'}
        />
        </tbody>
      </table>
    </div>
  )
}
