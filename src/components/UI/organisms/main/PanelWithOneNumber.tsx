import React from 'react'
import styled from 'styled-components'
import PanelDetailButton from '../../atoms/panel/PanelDetailButton'
import PanelNumber from '../../atoms/panel/PanelNumber'
import PanelTitle from '../../atoms/panel/PanelTitle'

type Props = {
  width: string
  height: string
  title: string
  num: number
  link: string
}

const PanelWithOneNumber = (props: Props) => {
  return (
    <Wrapper style={{width: props.width, height: props.height}}>
      <PanelTitle title={props.title} />
      <PanelNumber num={props.num} />
      <PanelDetailButton link={props.link} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: white;
  padding: 12px 20px 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
`

export default PanelWithOneNumber