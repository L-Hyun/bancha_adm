import React from 'react'
import PageWrapper from '../UI/layouts/PageWrapper'
import PartnerList from '../UI/organisms/partner/PartnerList'
import PartnerPanel from '../UI/organisms/partner/PartnerPanel'
import PartnerSearch from '../UI/organisms/partner/PartnerSearch'

type Props = {}

const PartnerPage = (props: Props) => {
  const filters = ["회원코드", "계정", "성명", "연락처", "담당자", "상태"]
  const search = ()=>{};
  const add=()=>{};

  return (
    <PageWrapper title={"파트너"} add={add} btn={true} >
      <PartnerPanel />
      <PartnerSearch filters={filters} search={search}/>
      <PartnerList />
    </PageWrapper>
  )
}

export default PartnerPage