import React from 'react'
import styled from 'styled-components'
import PanelNumberWithLabel from '../../molecules/panel/PanelNumberWithLabel'

type Props = {}

const RecordPanel = (props: Props) => {
  return (
    <Wrapper>
      <PanelNumberWithLabel label={"예약 건수"} num={"0"} />
      <PanelNumberWithLabel label={"확정 대기"} num={"0"} />
      <PanelNumberWithLabel label={"예약 취소"} num={"0"} />
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
`

export default RecordPanel