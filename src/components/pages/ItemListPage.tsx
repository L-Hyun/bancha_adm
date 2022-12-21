import React from 'react'
import ItemList from '../UI/organisms/item/ItemList'
import ItemPanel from '../UI/organisms/item/ItemPanel'
import ListSearch from '../UI/organisms/common/ListSearch'
import PageWrapper from '../UI/layouts/PageWrapper'

type Props = {}

const ItemListPage = (props: Props) => {
  const filters = ["상품코드", "상품명", "파트너", "담당자"]
  const search = ()=>{};
  const add=()=>{};

  return (
    <PageWrapper title={"상품 관리"} add={add} >
      <ItemPanel />
      <ListSearch filters={filters} search={search}/>
      <ItemList />
    </PageWrapper>
  )
}

export default ItemListPage