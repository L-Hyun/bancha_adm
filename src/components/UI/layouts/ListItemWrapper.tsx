import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
  border: boolean
}

type style = {
  border: boolean
}

const ListItemWrapper = (props: Props) => {
  return (
    <Wrapper border={props.border}>{props.children}</Wrapper>
  )
}

const Wrapper = styled.div<style>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  border-top: ${props=>(props.border ? "1px solid #ccc" : "")};
`

export default ListItemWrapper