import React from 'react'
import styled from 'styled-components'
import SmallListPanelNumber from '../../atoms/panel/SmallListPanelNumber'
import ListFieldName from '../../atoms/list/ListFieldName'

type Props = {
  text: string
  num: string
}

const SmallListPanelItem = (props: Props) => {
  return (
    <ListItem>
      <ListFieldName width={"auto"} text={props.text} />
      <SmallListPanelNumber num={props.num} />
    </ListItem>
  )
}

const ListItem = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
`

export default SmallListPanelItem