import React from 'react'
import styled from 'styled-components'

type Props = {
  val1: string
  val2: string
  border: boolean
  width: string
}

type container = {
  width: string
}

type style = {
  co: boolean
  border: boolean
}

const ListItemTwoValue = (props: Props) => {
  return (
    <Container width={props.width} >
      <Text border={props.border} co={true} >{props.val1}</Text>
      <Text border={props.border} co={false} >({props.val2})</Text>
    </Container>
  )
}

const Container = styled.div<container>`
  display: flex;
  flex-direction: column;
  
  width: ${props=>props.width};
`

const Text = styled.div<style>`
  font-size: ${props=>(props.co ? "20px" : "16px")};;
  text-align: center;
  width: 100%;
  border-left: ${props=>(props.border ? "1px solid #ccc" : "0")};
  color: ${props=>(props.co ? "black" : "grey")};
`

export default ListItemTwoValue