import React from 'react'
import PannelWrapper from '../../layouts/PannelWrapper'
import PanelNumberWithLabel from '../../molecules/panel/PanelNumberWithLabel'

type Props = {}

const ItemPanel = (props: Props) => {
  return (
    <PannelWrapper>
      <PanelNumberWithLabel label={"신규 상품"} num={"0"} />
      <PanelNumberWithLabel label={"판매 중"} num={"0"} />
      <PanelNumberWithLabel label={"일반 상품"} num={"0"} />
      <PanelNumberWithLabel label={"반차 상품"} num={"0"} />
    </PannelWrapper>
  )
}



export default ItemPanel