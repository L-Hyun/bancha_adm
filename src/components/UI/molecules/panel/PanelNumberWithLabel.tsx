import React from 'react'
import styled from 'styled-components'
import PanelNumber from '../../atoms/panel/PanelNumber'
import PanelNumberLabel from '../../atoms/panel/PanelNumberLabel'

type Props = {
  label: string
  num: number
}

const PanelNumberWithLabel = (props: Props) => {
  return (
    <Container>
      <PanelNumberLabel label={props.label} />
      <PanelNumber num={props.num} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default PanelNumberWithLabel