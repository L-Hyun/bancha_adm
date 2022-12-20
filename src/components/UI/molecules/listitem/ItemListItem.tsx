import React from 'react'
import styled from 'styled-components'
import ListItemSoldOut from '../../atoms/list/ListItemSoldOut'
import ListItemValue from '../../atoms/list/ListItemValue'

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
    <Wrapper border={props.border}>
      <ListItemValue val={props.id} border={false} width={"11%"} />
      <ListItemValue val={props.title} border={true} width={"22%"} />
      <ListItemValue val={props.price} border={true} width={"11%"} />
      <ListItemValue val={props.partner} border={true} width={"11%"} />
      <ListItemValue val={props.manager} border={true} width={"11%"} />
      <ListItemValue val={props.sales} border={true} width={"11%"} />
      <ListItemValue val={props.views} border={true} width={"11%"} />
      <ListItemSoldOut isSelling={props.isSelling} />
    </Wrapper>
  )
}
//이름, 코드, 품절처리, 누적판매량, 담당자

const Wrapper = styled.div<style>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  border-top: ${props=>(props.border ? "1px solid grey" : "")};
`

export default ItemListItem