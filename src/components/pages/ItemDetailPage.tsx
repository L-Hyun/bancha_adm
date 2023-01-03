import React from 'react'
import { useParams } from 'react-router-dom'
import PageWrapper from '../UI/layouts/PageWrapper';
import PageWrapperWithoutBtn from '../UI/layouts/PageWrapperWithoutBtn';
import ItemAdd from '../UI/organisms/item/ItemAdd';

type Props = {}

const ItemDetailPage = (props: Props) => {
  const {itemId} = useParams();

  return (
    <PageWrapperWithoutBtn title={"상품"}>
      <ItemAdd itemId={itemId || '0'}/>
    </PageWrapperWithoutBtn>
  )
}

export default ItemDetailPage