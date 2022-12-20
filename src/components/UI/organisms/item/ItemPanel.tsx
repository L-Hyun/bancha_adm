import React from 'react'
import styled from 'styled-components'
import PanelNumberWithLabel from '../../molecules/panel/PanelNumberWithLabel'

type Props = {}

const ItemPanel = (props: Props) => {
  return (
    <Wrapper>
      <PanelNumberWithLabel label={"신규 상품"} num={0} />
      <PanelNumberWithLabel label={"판매 중"} num={0} />
      <PanelNumberWithLabel label={"일반 상품"} num={0} />
      <PanelNumberWithLabel label={"반차 상품"} num={0} />
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

export default ItemPanel