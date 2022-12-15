import React from 'react'
import styled from 'styled-components'
import SmallListPanelNumber from '../atoms/main/SmallListPanelNumber'
import ListPanelFieldName from '../atoms/main/ListPanelFieldName'

type Props = {
  text: string
  num: number
}

const SmallListPanelItem = (props: Props) => {
  return (
    <ListItem>
      <ListPanelFieldName width={"auto"} text={props.text} />
      <SmallListPanelNumber num={props.num} />
    </ListItem>
  )
}

const ListItem = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
`

export default SmallListPanelItem