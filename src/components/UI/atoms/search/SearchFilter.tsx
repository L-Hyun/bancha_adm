import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

type Props = {
  filters: string[]
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

const SearchFilter = (props: Props) => {
  const handler = (e: any) =>{
    props.setSelected(e.target.value)
  }

  return (
    <Input onChange={handler} value={props.selected} id="filter" >
      {props.filters.map((e) => {
        return <option value={e} key={e}>{e}</option>
      })}
    </Input>
  )
}

const Input = styled.select`
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  border-radius: 10px;
`

export default SearchFilter