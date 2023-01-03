import React from 'react'
import styled from 'styled-components'
import TableTitle from '../../atoms/field/TableTitle'
import DetailWrapper from '../../layouts/DetailWrapper'
import FieldRowWithColorLabel from '../../molecules/field/FieldRowWithColorLabel'

type Props = {
  idx: number
  age: string
  birth: string
  sex: string
  focus: string
  type: string
}

const ChildDetail = (props: Props) => {
  return (
    <Wrapper>
      <TableTitle nickname={`자녀 ${props.idx}`} />
      <DetailWrapper>
        <FullWidthRow>
          <FieldRowWithColorLabel name={"연령대"} text={props.age} width={"33%"} />
          <FieldRowWithColorLabel name={"생년월일"} text={props.birth} width={"33%"} />
          <FieldRowWithColorLabel name={"성별"} text={props.sex} width={"33%"} />
        </FullWidthRow>
        <FullWidthRow>
          <FieldRowWithColorLabel name={"관심사"} text={props.focus} width={"33%"} />
          <FieldRowWithColorLabel name={"성향"} text={props.type} width={"33%"} />
          <Dummy />
        </FullWidthRow>
      </DetailWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 20px;
`

const FullWidthRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const Dummy = styled.div`
  width: 33%;
`

export default ChildDetail