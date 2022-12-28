import React from 'react'
import { useParams } from 'react-router-dom'
import PageWrapper from '../UI/layouts/PageWrapper';
import RecordDetail from '../UI/organisms/record/RecordDetail';

type Props = {}

const RecordDetailpage = (props: Props) => {
  return (
    <PageWrapper title={"예약내역"} add={()=>{}} btn={false} >
      <RecordDetail />
    </PageWrapper>
  )
}

export default RecordDetailpage