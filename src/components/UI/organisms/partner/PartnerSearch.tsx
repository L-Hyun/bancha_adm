import React from 'react'
import styled from 'styled-components'
import ListSearch from '../../molecules/search/ListSearch'
import PartnerSort from './PartnerSort'

type Props = {
  filters: string[]
  search: ()=>void
}

const PartnerSearch = (props: Props) => {
  return (
    <FlexRow>
      <ListSearch filters={props.filters} search={props.search} />
      <PartnerSort />
    </FlexRow>
  )
}

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export default PartnerSearch