import React from 'react'
import { useParams } from 'react-router-dom'
import PageWrapper from '../UI/layouts/PageWrapper';
import ItemDetail from '../UI/organisms/item/ItemDetail';

type Props = {}

const ItemDetailPage = (props: Props) => {
  const {itemId} = useParams();

  return (
    <PageWrapper title={"상품"} add={()=>{}} btn={false} >
      <ItemDetail itemId={itemId || '0'}/>
    </PageWrapper>
  )
}

export default ItemDetailPage