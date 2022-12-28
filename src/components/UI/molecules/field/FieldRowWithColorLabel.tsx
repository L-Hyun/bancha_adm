import React from 'react'
import styled from 'styled-components'
import FieldNameWithColor from '../../atoms/field/FieldNameWithColor'
import FieldText from '../../atoms/field/FieldText'

type Props = {
  name: string
  text: string
  width: string
}

type style = {
  width: string
}

const FieldRowWithColorLabel = (props: Props) => {
  return (
    <FlexRow width={props.width}>
      <FieldNameWithColor name={props.name}/>
      <FieldText text={props.text}/>
    </FlexRow>
  )
}

const FlexRow = styled.div<style>`
  display: flex;
  width: ${props => props.width};
`

export default FieldRowWithColorLabel