import React from 'react'
import PageWrapper from '../UI/layouts/PageWrapper'
import ListSearch from '../UI/organisms/common/ListSearch'
import PartnerList from '../UI/organisms/partner/PartnerList'
import PartnerPanel from '../UI/organisms/partner/PartnerPanel'

type Props = {}

const PartnerPage = (props: Props) => {
  const filters = ["회원코드", "계정", "성명", "연락처", "담당자", "상태"]
  const search = ()=>{};
  const add=()=>{};

  return (
    <PageWrapper title={"공급자"} add={add} >
      <PartnerPanel />
      <ListSearch filters={filters} search={search}/>
      <PartnerList />
    </PageWrapper>
  )
}

export default PartnerPage