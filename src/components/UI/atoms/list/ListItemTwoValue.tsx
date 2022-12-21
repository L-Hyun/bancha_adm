import React from 'react'
import styled from 'styled-components'

type Props = {
  val1: string
  val2: string
  width: string
  paint: boolean
}

type container = {
  width: string
}

type style = {
  co: boolean
}

const ListItemTwoValue = (props: Props) => {
  return (
    <Container width={props.width} >
      <Text co={true} >{props.val1}</Text>
      <Text co={props.paint} >({props.val2})</Text>
    </Container>
  )
}

const Container = styled.div<container>`
  display: flex;
  flex-direction: column;
  width: ${props=>props.width};
`

const Text = styled.div<style>`
  font-size: ${props=>(props.co ? "16px" : "14px")};;
  text-align: center;
  width: 100%;
  color: ${props=>(props.co ? "black" : "grey")};
`

export default ListItemTwoValue