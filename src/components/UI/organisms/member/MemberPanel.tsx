import React from 'react'
import styled from 'styled-components'
import PanelNumberWithLabel from '../../molecules/panel/PanelNumberWithLabel'

type Props = {}

const MemberPanel = (props: Props) => {
  let xx = 102502
  return (
    <Wrapper>
      <PanelNumberWithLabel label={"회원 수"} num={xx.toLocaleString()} />
      <FlexRow>
        <Div>신규회원</Div>
        <PanelNumberWithLabel label={"일"} num={"128"} />
        <PanelNumberWithLabel label={"월"} num={"2597"} />
        <PanelNumberWithLabel label={"년"} num={"102512"} />
      </FlexRow>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 20px;
  overflow: hidden;
`

const Div = styled.div`
  background-color: grey;
  color: white;
  width: 100px;
  height: 140px;
  line-height: 140px;
  text-align: center;
`

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`

export default MemberPanel