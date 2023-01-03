import React from 'react'
import { useParams } from 'react-router-dom';
import PageWrapper from '../UI/layouts/PageWrapper'
import ChildDetail from '../UI/organisms/member/ChildDetail';
import MemberDetail from '../UI/organisms/member/MemberDetail';

type Props = {}

const MemberDetailPage = (props: Props) => {
  const {memberId} = useParams();

  return (
    <PageWrapper title={"일반회원"} add={()=>{}} btn={false} >
      <MemberDetail memberId={memberId || '0'} />
      <ChildDetail idx={1} age={"10대"} birth={"2022-12-30"} sex={"남"} focus={"액티비티"} type={"조용"} />
      <ChildDetail idx={2} age={"10대"} birth={"2022-12-30"} sex={"남"} focus={"액티비티"} type={"조용"} />
    </PageWrapper>
  )
}

export default MemberDetailPage