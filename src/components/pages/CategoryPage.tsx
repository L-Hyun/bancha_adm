import React from 'react'
import styled from 'styled-components'
import CategoryList from '../UI/organisms/category/CategoryList'
import ListSearch from '../UI/organisms/common/ListSearch'

type Props = {}

const CategoryPage = (props: Props) => {
  let filters = ["코드", "카테고리명", "활성화"];

  return (
    <Wrapper>
      <ListSearch filters={filters} />
      <CategoryList />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 90%;
  padding: 20px 20px 20px;
`

export default CategoryPage