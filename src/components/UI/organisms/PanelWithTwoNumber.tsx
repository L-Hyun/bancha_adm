import React from 'react'
import styled from 'styled-components'
import PanelDetailButton from '../atoms/main/PanelDetailButton'
import PanelNumber from '../atoms/main/PanelNumber'
import PanelNumberLabel from '../atoms/main/PanelNumberLabel'
import PanelTitle from '../atoms/main/PanelTitle'

type Props = {
  width: string
  height: string
  title: string,
  num1: number,
  num2: number,
  link: string
}

const PanelWithTwoNumber = (props: Props) => {
  return (
    <Wrapper style={{width: props.width, height: props.height}}>
      <PanelTitle title={props.title}/>
      <FlexRow>
        <FlexColumn>
          <PanelNumberLabel label={"일반"} />
          <PanelNumber num={props.num1} />
        </FlexColumn>
        <Divider />
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
`

const FlexRow = styled.div`
  display: flex;
  justify-content: space-around;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Divider = styled.div`
  width: 1px;
  height: 200px;
  background-color: grey;
  margin: 0 -20px 0 -20px;
`

export default PanelWithTwoNumber