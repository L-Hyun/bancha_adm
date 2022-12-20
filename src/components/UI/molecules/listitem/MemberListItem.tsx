import React from 'react'
import styled from 'styled-components'
import ListItemTwoValue from '../../atoms/list/ListItemTwoValue'
import ListItemValue from '../../atoms/list/ListItemValue'

type Props = {
  border: boolean
  id: string
  email: string
  nickname: string
  name: string
  phone: string
  reviews: string
  buys: string
  totalPrice: string
  status: string
  lastLogin: string
}

type style = {
  border: boolean
}

const MemberListItem = (props: Props) => {
  return (
    <Wrapper border={props.border}>
      <ListItemValue val={props.id} border={false} width={"10%"} />
      <ListItemTwoValue val1={props.email} val2={props.nickname} border={true} width={"15%"} />
      <ListItemValue val={props.name} border={true} width={"10%"} />
      <ListItemValue val={props.phone} border={true} width={"15%"} />
      <ListItemValue val={props.reviews} border={true} width={"10%"} />
      <ListItemValue val={props.buys} border={true} width={"10%"} />
      <ListItemValue val={props.totalPrice} border={true} width={"10%"} />
      <ListItemValue val={props.status} border={true} width={"10%"} />
      <ListItemValue val={props.lastLogin} border={true} width={"10%"} />
    </Wrapper>
  )
}

const Wrapper = styled.div<style>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  border-top: ${props=>(props.border ? "1px solid grey" : "")};
`

export default MemberListItem