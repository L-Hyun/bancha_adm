import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import FieldNameWithColor from '../../atoms/field/FieldNameWithColor'
import FieldTextWithBooleanButton from './FieldTextWithBooleanButton'

type Props = {
  name: string
  text: string
  width: string
  active: boolean
  button: string
  onClick: Dispatch<SetStateAction<boolean>>
}

type style = {
  width: string
}

const FieldRowWithColorLabelAndBooleanButton = (props: Props) => {
  return (
    <FlexRow width={props.width}>
      <FieldNameWithColor name={props.name}/>
      <FieldTextWithBooleanButton title={props.text} active={props.active} text={props.button} onClick={props.onClick} width={`calc(100% - 180px)`} />
    </FlexRow>
  )
}

const FlexRow = styled.div<style>`
  display: flex;
  width: ${props => props.width};
`

export default FieldRowWithColorLabelAndBooleanButton
