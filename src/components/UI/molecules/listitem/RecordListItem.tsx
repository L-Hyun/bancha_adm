import React from 'react'
import styled from 'styled-components'
import CustomLink from '../../atoms/CustomLink'
import ListItemTwoValue from '../../atoms/list/ListItemTwoValue'
import ListItemValue from '../../atoms/list/ListItemValue'

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

type style = {
  border: boolean
}

const RecordListItem = (props: Props) => {
  return (
    <CustomLink to={`/record/${props.id}`}>
      <Wrapper border={props.border}>
        <ListItemValue val={props.id} width={"12.5%"} />
        <ListItemTwoValue val1={props.purchaseDate} val2={props.purchaseType} width={"12.5%"} paint={false} />
        <ListItemValue val={props.status} width={"15%"} />
        <ListItemTwoValue val1={props.name} val2={props.phone} width={"18.75%"} paint={true} />
        <ListItemValue val={props.title} width={"18.75%"} />
        <ListItemValue val={props.qty} width={"12.5%"} />
        <ListItemValue val={props.price} width={"12.5%"} />
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

export default RecordListItem