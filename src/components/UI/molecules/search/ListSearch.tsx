import React, { useState } from 'react'
import styled from 'styled-components'
import SearchButton from '../../atoms/search/SearchButton'
import SearchFilter from '../../atoms/search/SearchFilter'
import SearchInput from '../../atoms/search/SearchInput'

type Props = {
  filters: string[]
  search: ()=>void
}

const ListSearch = (props: Props) => {
  const [filter, setFilter] = useState(props.filters[0]);
  const [query, setQuery] = useState("");

  return (
    <Search onKeyDown={(e)=>{ if (e.key == "Enter") {
      e.preventDefault();
      props.search();
      }}}
    >
      <SearchFilter filters={props.filters} selected={filter} setSelected={setFilter} />
      <SearchInput val={query} setVal={setQuery} />
      <SearchButton onClick={props.search} />
    </Search>
  )
}

const Search = styled.form`
  width: 690px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export default ListSearch