import React, { Dispatch, SetStateAction, useEffect } from 'react'
import styled from 'styled-components'
import ListPageBtn from '../../atoms/list/ListPageBtn'

type Props = {
  idx: number
  selected: number
  setSelected: (e: string) => void
}

const ListPage = (props: Props) => {

  const render = () => {
    let page = new Array<any>;
    for (let i = 0; i < 5; i++) {
      page.push(
        <ListPageBtn idx={(props.idx + i).toString()} selected={props.selected === props.idx + i ? true : false} onClick={props.setSelected} />
      );
    }
    return page;
  }

  return (
    <FlexRow>
      {render()}
    </FlexRow>
  )
}

const FlexRow = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`

export default ListPage