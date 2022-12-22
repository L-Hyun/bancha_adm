import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

type Props = {
  value: string
  setter: Dispatch<SetStateAction<string>>
  width: string
  height: string
}

type style = {
  width: string
  height: string
}

const FieldTextAreaInput = (props: Props) => {
  return (
    <Text width={props.width} height={props.height} value={props.value} onChange={(e)=>{props.setter(e.target.value)}} />
  )
}

const Text = styled.textarea<style>`
  width: ${props => props.width};
  height: ${props => props.height};
  font-size: 18px;
`

export default FieldTextAreaInput