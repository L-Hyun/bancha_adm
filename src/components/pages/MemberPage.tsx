import React from 'react'
import styled from 'styled-components'
import ListSearch from '../UI/organisms/common/ListSearch'
import MemberList from '../UI/organisms/member/MemberList'

type Props = {}

const MemberPage = (props: Props) => {
  const filters = ["회원코드", "계정", "성명", "연락처", "상태"]

  return (
    <Wrapper>
      <ListSearch filters={filters} />
      <MemberList />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 90%;
  padding: 20px 20px 20px;
`

export default MemberPage