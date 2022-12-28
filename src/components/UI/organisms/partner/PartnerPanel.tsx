import React from 'react'
import styled from 'styled-components'
import PannelWrapper from '../../layouts/PannelWrapper'
import PanelNumberWithLabel from '../../molecules/panel/PanelNumberWithLabel'

type Props = {}

const PartnerPanel = (props: Props) => {
  let xx = 10035
  return (
    <PannelWrapper>
      <PanelNumberWithLabel label={"회원 수"} num={xx.toLocaleString()} />
      <FlexRow>
        <Div>신규회원</Div>
        <PanelNumberWithLabel label={"일"} num={"15"} />
        <PanelNumberWithLabel label={"월"} num={"259"} />
        <PanelNumberWithLabel label={"년"} num={"10035"} />
      </FlexRow>
    </PannelWrapper>
  )
}

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

export default PartnerPanel