import React from 'react'
import styled from 'styled-components'

type Props = {
  onClick: ()=>void
}

const SearchButton = (props: Props) => {
  return (
    <Btn type="button" onClick={props.onClick} >
      검색
    </Btn>
  )
}

const Btn = styled.button`
  cursor: pointer;
  width: 70px;
  height: 50px;
  background-color: grey; /*8ac28d */
  color: white;
  text-align: center;
  border-radius: 10px;
  line-height: 50px;
  font-size: 16px;
`

export default SearchButton