import React from 'react'
import styled from 'styled-components'
import ListSearch from '../../molecules/search/ListSearch'
import MemberSort from './MemberSort'

type Props = {
  filters: string[]
  search: ()=>void
}

const MemberSearch = (props: Props) => {
  return (
    <FlexRow>
      <ListSearch filters={props.filters} search={props.search} />
      <MemberSort />
    </FlexRow>
  )
}

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export default MemberSearch