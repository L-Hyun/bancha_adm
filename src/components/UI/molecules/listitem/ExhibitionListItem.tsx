import React from 'react'
import ListItemValue from '../../atoms/list/ListItemValue'
import ListItemWrapper from '../../layouts/ListItemWrapper'

type Props = {
  border: boolean
  id: string
  name: string
  items: string
  start: string
  end: string
  views: string
}

const ExhibitionListItem = (props: Props) => {
  return (
    <ListItemWrapper to={`${props.id}`} border={props.border}>
      <ListItemValue val={props.id} width={"12.5%"} />
      <ListItemValue val={props.name} width={"37.5%"} />
      <ListItemValue val={props.items} width={"12.5%"} />
      <ListItemValue val={props.start} width={"12.5%"} />
      <ListItemValue val={props.end} width={"12.5%"} />
      <ListItemValue val={props.views} width={"12.5%"} />
    </ListItemWrapper>
  )
}

export default ExhibitionListItem