import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

type Props = {
  val: string
  setVal: Dispatch<SetStateAction<string>>
}

const SearchInput = (props: Props) => {
  return (
    <Input type={"text"} value={props.val} onChange={(e)=>{props.setVal(e.target.value)}} placeholder={"검색어"} />
  )
}

const Input = styled.input`
  width: 400px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid grey;
`

export default SearchInput