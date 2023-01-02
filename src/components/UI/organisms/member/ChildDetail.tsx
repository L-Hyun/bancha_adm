import React from 'react'
import styled from 'styled-components'
import TableTitle from '../../atoms/field/TableTitle'
import DetailWrapper from '../../layouts/DetailWrapper'
import FieldRowWithColorLabel from '../../molecules/field/FieldRowWithColorLabel'

type Props = {}

const ChildDetail = (props: Props) => {
  return (
    <Wrapper>
      <TableTitle nickname={"자녀"} />
      <DetailWrapper>
        <FullWidthRow>
          <FieldRowWithColorLabel name={"연령대"} text={"10대"} width={"33%"} />
          <FieldRowWithColorLabel name={"생년월일"} text={"2022-12-30"} width={"33%"} />
          <FieldRowWithColorLabel name={"성별"} text={"여자"} width={"33%"} />
        </FullWidthRow>
        <FullWidthRow>
          <FieldRowWithColorLabel name={"관심사"} text={"액티비티"} width={"33%"} />
          <FieldRowWithColorLabel name={"성향"} text={"조용"} width={"33%"} />
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