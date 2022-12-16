import React from 'react'
import styled from 'styled-components'
import ListItemValue from '../atoms/list/ListItemValue'

type Props = {
  title: string
  date: string
  qty: string
  price: string
  border: boolean
}

type style = {
  border: boolean
}

const ListPanelItem = (props: Props) => {
  return (
    <Wrapper border={props.border}>
      <ListItemValue val={props.title} border={false} width={"40%"} />
      <ListItemValue val={props.date} border={true} width={"20%"} />
      <ListItemValue val={props.qty} border={true} width={"20%"} />
      <ListItemValue val={props.price} border={true} width={"20%"} />
    </Wrapper>
  )
}

const Wrapper = styled.div<style>`
  display: flex;
  align-items: center;
  height: 70px;
  border-top: ${props=>(props.border ? "1px solid grey" : "")};
`

export default ListPanelItem