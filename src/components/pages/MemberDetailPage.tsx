import React from 'react'
import { useParams } from 'react-router-dom';
import PageWrapper from '../UI/layouts/PageWrapper'
import MemberDetail from '../UI/organisms/member/MemberDetail';

type Props = {}

const MemberDetailPage = (props: Props) => {
  const {memberId} = useParams();

  return (
    <PageWrapper title={"일반회원"} add={()=>{}} btn={false} >
      <MemberDetail memberId={memberId || '0'} />
    </PageWrapper>
  )
}

export default MemberDetailPage