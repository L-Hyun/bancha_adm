import React from 'react'
import ItemList from '../UI/organisms/item/ItemList'
import ItemPanel from '../UI/organisms/item/ItemPanel'
import PageWrapper from '../UI/layouts/PageWrapper'
import ItemSearch from '../UI/organisms/item/ItemSearch'

type Props = {}

const ItemListPage = (props: Props) => {
  const filters = ["상품코드", "상품명", "파트너", "담당자"]
  const search = ()=>{};
  const add=()=>{};

  return (
    <PageWrapper title={"상품 관리"} add={add} btn={true} >
      <ItemPanel />
      <ItemSearch filters={filters} search={search}/>
      <ItemList />
    </PageWrapper>
  )
}

export default ItemListPage