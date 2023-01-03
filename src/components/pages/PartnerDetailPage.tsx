import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import PageWrapper from '../UI/layouts/PageWrapper';
import PartnerAdd from '../UI/organisms/partner/PartnerAdd';
import PartnerDetail from '../UI/organisms/partner/PartnerDetail';

type Props = {}

const PartnerDetailPage = (props: Props) => {
  const {partnerId} = useParams();
  const [readOnly, setReadOnly] = useState(true)

  return (
    <PageWrapper title={"일반회원"} add={()=>{setReadOnly(!readOnly)}} btn={true} >
      {readOnly ? <PartnerDetail partnerId={partnerId || '0'} /> : <PartnerAdd />}
    </PageWrapper>
  )
}

export default PartnerDetailPage