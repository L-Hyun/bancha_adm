import React from 'react'
import ListItemSoldOut from '../../atoms/list/ListItemSoldOut'
import ListItemValue from '../../atoms/list/ListItemValue'
import ListItemWrapper from '../../layouts/ListItemWrapper'

type Props = {
  title: string
  id: string
  price: string
  partner: string
  sales: string
  views: string
  manager: string
  border: boolean
  chkSoldOut: (id: number)=>void
  isSelling: boolean
}

type style = {
  border: boolean
}

const ItemListItem = (props: Props) => {
  return (
    <ListItemWrapper border={props.border}>
      <ListItemValue val={props.id} width={"11%"} />
      <ListItemValue val={props.title} width={"22%"} />
      <ListItemValue val={props.price} width={"11%"} />
      <ListItemValue val={props.partner} width={"11%"} />
      <ListItemValue val={props.manager} width={"11%"} />
      <ListItemValue val={props.sales} width={"11%"} />
      <ListItemValue val={props.views} width={"11%"} />
      <ListItemSoldOut isSelling={props.isSelling} />
    </ListItemWrapper>
  )
}

export default ItemListItem