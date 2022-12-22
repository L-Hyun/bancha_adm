import React from 'react'
import PageWrapper from '../UI/layouts/PageWrapper'
import MemberList from '../UI/organisms/member/MemberList'
import MemberPanel from '../UI/organisms/member/MemberPanel'
import MemberSearch from '../UI/organisms/member/MemberSearch'

type Props = {}

const MemberPage = (props: Props) => {
  const filters = ["회원코드", "계정", "성명", "연락처", "상태"]
  const search = ()=>{};
  const add=()=>{};

  return (
    <PageWrapper title={"일반 회원"} add={add}>
      <MemberPanel />
      <MemberSearch filters={filters} search={search} />
      <MemberList />
    </PageWrapper>
  )
}

export default MemberPage