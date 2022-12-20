import React from 'react'
import styled from 'styled-components'
import ItemListItem from '../UI/molecules/listitem/ItemListItem'
import ItemList from '../UI/organisms/item/ItemList'
import ItemPanel from '../UI/organisms/item/ItemPanel'
import ListSearch from '../UI/organisms/common/ListSearch'

type Props = {}

const ItemListPage = (props: Props) => {
  const filters = ["상품코드", "상품명", "파트너", "담당자"]

  return (
    <Wrapper>
      <ItemPanel />
      <ListSearch filters={filters} />
      <ItemList />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 90%;
  padding: 20px 20px 20px;
`

export default ItemListPage