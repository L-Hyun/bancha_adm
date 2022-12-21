import React from 'react'
import styled from 'styled-components'

type Props = {
  val: string
  width: string
}

type style = {
  width: string
}

const ListItemValue = (props: Props) => {
  return (
    <Text width={props.width} >{props.val}</Text>
  )
}

const Text = styled.div<style>`
  font-size: 16px;
  text-align: center;
  width: ${props=>props.width};
  height: 50px;
  line-height: 50px;
`

export default ListItemValue