import React from 'react'
import ListItemValue from '../../atoms/list/ListItemValue'
import ListItemWrapper from '../../layouts/ListItemWrapper'

type Props = {
  border: boolean
  id: string
  type: string
  name: string
  items: string
  isActive: string
}

const SectionListItem = (props: Props) => {
  return (
    <ListItemWrapper border={props.border}>
      <ListItemValue val={props.id} width={"15%"} />
      <ListItemValue val={props.type} width={"30%"} />
      <ListItemValue val={props.name} width={"20%"} />
      <ListItemValue val={props.items} width={"20%"} />
      <ListItemValue val={props.isActive} width={"15%"} />
    </ListItemWrapper>
  )
}

export default SectionListItem