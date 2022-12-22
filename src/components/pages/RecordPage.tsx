import React from 'react'
import PageWrapper from '../UI/layouts/PageWrapper'
import ListSearch from '../UI/molecules/search/ListSearch'
import RecordList from '../UI/organisms/record/RecordList'
import RecordPanel from '../UI/organisms/record/RecordPanel'

type Props = {}

const RecordPage = (props: Props) => {
  const filters = ["상품코드", "상품명", "파트너", "담당자"]
  const search = ()=>{};
  const add=()=>{};

  return (
    <PageWrapper title={"예약 내역"} add={add} >
      <RecordPanel />
      <ListSearch filters={filters} search={search}/>
      <RecordList />
    </PageWrapper>
  )
}

export default RecordPage