import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import FieldBooleanButton from '../../atoms/field/FieldBooleanButton'

type Props = {
  title: string
  active: boolean
  text: string
  onClick: Dispatch<SetStateAction<boolean>>
  width: string
}

type style = {
  width: string
}

const FieldTextWithBooleanButton = (props: Props) => {
  return (
    <SubRow width={props.width}>
      <Text>{props.title}</Text>
      <FieldBooleanButton active={props.active} text={props.text} onClick={props.onClick}/>
    </SubRow>
  )
}

const SubRow = styled.div<style>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width};
`

const Text = styled.div`
  font-size: 16px;
`

export default FieldTextWithBooleanButton