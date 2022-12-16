import React from 'react'
import styled from 'styled-components'

type Props = {
  val: string
  border: boolean
  width: string
}

type style = {
  width: string
  border: boolean
}

const ListItemValue = (props: Props) => {
  return (
    <Text width={props.width} border={props.border} >{props.val}</Text>
  )
}

const Text = styled.div<style>`
  font-size: 20px;
  text-align: center;
  border-left: ${props=>(props.border ? "1px solid #ccc" : "0")};

  width: ${props=>props.width};

`

export default ListItemValue