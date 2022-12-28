import React from 'react'
import PannelWrapper from '../../layouts/PannelWrapper'
import PanelNumberWithLabel from '../../molecules/panel/PanelNumberWithLabel'

type Props = {}

const RecordPanel = (props: Props) => {
  return (
    <PannelWrapper>
      <PanelNumberWithLabel label={"예약 건수"} num={"0"} />
      <PanelNumberWithLabel label={"확정 대기"} num={"0"} />
      <PanelNumberWithLabel label={"예약 취소"} num={"0"} />
    </PannelWrapper>
  )
}

export default RecordPanel