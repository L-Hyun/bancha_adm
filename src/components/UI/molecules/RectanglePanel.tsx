import React from 'react'
import styled from 'styled-components'
import PanelDetailButton from '../atoms/PanelDetailButton'
import PanelNumber from '../atoms/PanelNumber'
import PanelNumberLabel from '../atoms/PanelNumberLabel'
import PanelTitle from '../atoms/PanelTitle'

type Props = {
  title: string,
  num1: number,
  num2: number,
  link: string
}

const RectanglePanel = (props: Props) => {
  return (
    <Wrapper>
      <PanelTitle title={props.title}/>
      <FlexRow>
        <FlexColumn>
          <PanelNumberLabel label={"일반"} />
          <PanelNumber num={props.num1} />
        </FlexColumn>
        <FlexColumn>
          <PanelNumberLabel label={"파트너"} />
          <PanelNumber num={props.num2} />
        </FlexColumn>
      </FlexRow>
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
  height: 512px;
`

const FlexRow = styled.div`
  display: flex;
  justify-content: space-around;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export default RectanglePanel