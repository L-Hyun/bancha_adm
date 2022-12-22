import React from 'react'
import ListItemValue from '../../atoms/list/ListItemValue'
import ListItemWrapper from '../../layouts/ListItemWrapper'

type Props = {
  border: boolean
  id: string
  name: string
  items: string
  isActive: string
}

const CategoryListItem = (props: Props) => {
  return (
    <ListItemWrapper to={`${props.id}`} border={props.border}>
      <ListItemValue val={props.id} width={"20%"} />
      <ListItemValue val={props.name} width={"40%"} />
      <ListItemValue val={props.items} width={"25%"} />
      <ListItemValue val={props.isActive} width={"15%"} />
    </ListItemWrapper>
  )
}

export default CategoryListItem