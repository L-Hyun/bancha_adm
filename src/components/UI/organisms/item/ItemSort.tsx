import React, { useState } from 'react'
import styled from 'styled-components'
import ListSortBtn from '../../atoms/list/ListSortBtn'

type Props = {}

const ItemSort = (props: Props) => {
  const [flags, setFlags] = useState([true, true, true])
  const sort = ()=>{}

  return (
    <FlexRow>
      <ListSortBtn text={"등록일순"} flag={flags[0]} sort={sort} idx={0} />
      <ListSortBtn text={"판매량순"} flag={flags[1]} sort={sort} idx={1} />
      <ListSortBtn text={"조회수순"} flag={flags[2]} sort={sort} idx={2} />
    </FlexRow>
  )
}

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export default ItemSort