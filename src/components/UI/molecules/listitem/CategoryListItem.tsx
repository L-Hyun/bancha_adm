import React from 'react'
import styled from 'styled-components'
import ListItemValue from '../../atoms/list/ListItemValue'

type Props = {
  border: boolean
  id: string
  name: string
  items: string
  isActive: string
}

type style = {
  border: boolean
}

const CategoryListItem = (props: Props) => {
  return (
    <Wrapper border={props.border}>
      <ListItemValue val={props.id} border={false} width={"25%"} />
      <ListItemValue val={props.name} border={true} width={"30%"} />
      <ListItemValue val={props.items} border={true} width={"25%"} />
      <ListItemValue val={props.isActive} border={true} width={"20%"} />
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

export default CategoryListItem