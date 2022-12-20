import React from 'react'
import styled from 'styled-components'
import PanelDetailButton from '../../atoms/panel/PanelDetailButton'
import PanelTitle from '../../atoms/panel/PanelTitle'
import PanelNumberWithLabel from '../../molecules/panel/PanelNumberWithLabel'

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
        <PanelNumberWithLabel label={"일반"} num={props.num1} />
        <Divider />
        <PanelNumberWithLabel label={"파트너"} num={props.num2} />
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

const Divider = styled.div`
  width: 1px;
  height: 200px;
  background-color: grey;
  margin: 0 -20px 0 -20px;
`

export default PanelWithTwoNumber