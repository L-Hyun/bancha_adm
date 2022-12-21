import React from 'react'
import styled from 'styled-components'
import CustomLink from '../../atoms/CustomLink'
import ListItemTwoValue from '../../atoms/list/ListItemTwoValue'
import ListItemValue from '../../atoms/list/ListItemValue'

type Props = {
  border: boolean
  id: string
  email: string
  nickname: string
  name: string
  phone: string
  manager: string
  reviews: string
  purchases: string
  items: string
  status: string
}

type style = {
  border: boolean
}

const PartnerListItem = (props: Props) => {
  return (
    <CustomLink to={`/partner/${props.id}`}>
      <Wrapper border={props.border}>
        <ListItemValue val={props.id} width={"10%"} />
        <ListItemTwoValue val1={props.email} val2={props.nickname} width={"15%"} paint={false} />
        <ListItemValue val={props.name} width={"10%"} />
        <ListItemValue val={props.phone} width={"15%"} />
        <ListItemValue val={props.manager} width={"10%"} />
        <ListItemValue val={props.reviews} width={"10%"} />
        <ListItemValue val={props.purchases} width={"10%"} />
        <ListItemValue val={props.items} width={"10%"} />
        <ListItemValue val={props.status} width={"10%"} />
      </Wrapper>
    </CustomLink>
  )
}

const Wrapper = styled.div<style>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  border-top: ${props=>(props.border ? "1px solid grey" : "")};
`

export default PartnerListItem