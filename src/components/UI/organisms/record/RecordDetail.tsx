import React, { useState } from 'react'
import styled from 'styled-components'
import FieldDateInput from '../../atoms/field/FieldDateInput'
import FieldNameWithColor from '../../atoms/field/FieldNameWithColor'
import FieldSelectInput from '../../atoms/field/FieldSelectInput'
import DetailWrapper from '../../layouts/DetailWrapper'
import FieldRowWithColorLabel from '../../molecules/field/FieldRowWithColorLabel'

type Props = {}

const RecordDetail = (props: Props) => {
  const [selected, setSelected] = useState("예약 확인 중")
  const [reservationDate, setReservationDate] = useState("2022-1-1")
  let options = ["예약 확인 중", "예약 완료", "예약 취소", "확정 대기"]
  let temp = 72000

  return (
    <DetailWrapper>
      <FieldRowWithColorLabel name={"예약번호"} text={"1"} width={"100%"}/>
      <Divider />
      <FullWidthRow>
        <FieldRowWithColorLabel name={"예약자 ID"} text={"ididid"} width={"30%"} />
        <FieldRowWithColorLabel name={"예약자명"} text={"홍길동"} width={"30%"} />
        <FieldRowWithColorLabel name={"연락처"} text={"010-1234-5678"} width={"30%"} />
      </FullWidthRow>
      <Divider />
      <FullWidthRow>
        <FieldRowWithColorLabel name={"결제일"} text={"2022-11-11"} width={"30%"} />
        <FieldRowWithColorLabel name={"결제방법"} text={"무통장"} width={"30%"} />
        <FieldRowWithColorLabel name={"결제금액"} text={temp.toLocaleString()} width={"30%"} />
      </FullWidthRow>
      <FullWidthRow>
        <FieldRowWithColorLabel name={"예약 인원"} text={"1"} width={"30%"} />
        <FieldRowWithColorLabel name={"포인트 사용"} text={"200"} width={"30%"} />
        <Dummy />
      </FullWidthRow>
      <Divider />
      <FullWidthRow>
        <FlexRow>
          <FieldNameWithColor name={"예약일"} />
          <FieldDateInput value={reservationDate} setter={setReservationDate} width={"40%"} />
        </FlexRow>
        <FlexRow>
          <FieldNameWithColor name={"예약 상태"} />
          <FieldSelectInput options={options} selected={selected} setSelected={setSelected} width={"40%"}/>
        </FlexRow>
        <Dummy />
      </FullWidthRow>
      <Divider />
      <FieldRowWithColorLabel name={"상품명"} text={"1"} width={"100%"}/>
      <Divider />
    </DetailWrapper>
  )
}

const FullWidthRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Dummy = styled.div`
  width: 30%;
`

const FlexRow = styled.div`
  display: flex;
  align-items: baseline;
  width: 30%;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: -1px;
`

export default RecordDetail