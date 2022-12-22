import React, { ReactNode } from 'react'
import styled from 'styled-components'
import FieldName from '../../atoms/field/FieldName'

type Props = {
  border: boolean
  name: string
  children: ReactNode
}

type style = {
  border: boolean
}

const FieldRow = (props: Props) => {
  return (
    <Row border={props.border} >
      <FieldName name={props.name}/>
      {props.children}
    </Row>
  )
}

const Row = styled.section<style>`
  border-top: ${props=>(props.border ? "1px solid #ccc" : "")};
  width: calc(100% - 40px);
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export default FieldRow