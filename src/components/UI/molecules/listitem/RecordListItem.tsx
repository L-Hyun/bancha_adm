import React from 'react'
import ListItemTwoValue from '../../atoms/list/ListItemTwoValue'
import ListItemValue from '../../atoms/list/ListItemValue'
import ListItemWrapper from '../../layouts/ListItemWrapper'

type Props = {
  border: boolean
  id: string
  name: string
  phone: string
  purchaseDate: string
  purchaseType: string
  title: string
  status: string
  qty: string
  price: string
}

const RecordListItem = (props: Props) => {
  return (
    <ListItemWrapper to={`${props.id}`} border={props.border}>
      <ListItemValue val={props.id} width={"12.5%"} />
      <ListItemTwoValue val1={props.purchaseDate} val2={props.purchaseType} width={"12.5%"} paint={false} />
      <ListItemValue val={props.status} width={"15%"} />
      <ListItemTwoValue val1={props.name} val2={props.phone} width={"18.75%"} paint={true} />
      <ListItemValue val={props.title} width={"18.75%"} />
      <ListItemValue val={props.qty} width={"12.5%"} />
      <ListItemValue val={props.price} width={"12.5%"} />
    </ListItemWrapper>
  )
}

export default RecordListItem