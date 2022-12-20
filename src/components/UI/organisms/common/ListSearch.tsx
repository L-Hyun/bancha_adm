import React, { useState } from 'react'
import styled from 'styled-components'
import SearchButton from '../../atoms/search/SearchButton'
import SearchFilter from '../../atoms/search/SearchFilter'
import SearchInput from '../../atoms/search/SearchInput'

type Props = {
  filters: string[]
  // search: ()=>void 추후 처리 필요
}

const ListSearch = (props: Props) => {
  const [filter, setFilter] = useState(props.filters[0]);
  const [query, setQuery] = useState("");

  const search = () => {
    console.log(filter, query)
  }

  return (
    <Container onKeyDown={(e)=>{ if (e.key == "Enter") {
      e.preventDefault();
      search();
    } }} >
      <SearchFilter filters={props.filters} selected={filter} setSelected={setFilter} />
      <SearchInput val={query} setVal={setQuery} />
      <SearchButton onClick={search} />
    </Container>
  )
}

const Container = styled.form`
  width: 690px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export default ListSearch