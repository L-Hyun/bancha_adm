import React from 'react'
import styled from 'styled-components'
import ListSearch from '../../molecules/search/ListSearch'
import ItemSort from './ItemSort'

type Props = {
  filters: string[]
  search: ()=>void
}

const ItemSearch = (props: Props) => {
  return (
    <FlexRow>
      <ListSearch filters={props.filters} search={props.search} />
      <ItemSort />
    </FlexRow>
  )
}

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export default ItemSearch