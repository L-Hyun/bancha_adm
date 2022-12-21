import React from 'react'
import PageWrapper from '../UI/layouts/PageWrapper'
import CategoryList from '../UI/organisms/category/CategoryList'
import ListSearch from '../UI/organisms/common/ListSearch'

type Props = {}

const CategoryPage = (props: Props) => {
  let filters = ["코드", "카테고리명", "활성화"];
  const search = ()=>{};
  const add=()=>{};

  return (
    <PageWrapper title={"카테고리"} add={add} >
      <ListSearch filters={filters} search={search}/>
      <CategoryList />
    </PageWrapper>
  )
}

export default CategoryPage