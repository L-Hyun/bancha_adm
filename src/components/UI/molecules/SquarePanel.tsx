import React from 'react'
import styled from 'styled-components'
import PanelDetailButton from '../atoms/PanelDetailButton'
import PanelNumber from '../atoms/PanelNumber'
import PanelTitle from '../atoms/PanelTitle'

type Props = {
  title: string
  num: number
  link: string
}

const SquarePanel = (props: Props) => {
  return (
    <Wrapper>
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
  width: 300px;
  height: 312px;
`

export default SquarePanel