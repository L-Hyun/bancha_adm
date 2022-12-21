import React from 'react'
import styled from 'styled-components'

type Props = {
  isSelling: boolean
}

const ListItemSoldOut = (props: Props) => {
  return (
    <Div>
      <Selling>{props.isSelling ? "판매 중" : "숨김"}</Selling>
      <Soldout>{props.isSelling ? "숨기기" : "판매하기"}</Soldout>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 16%;
`

const Selling = styled.div`
  font-size: 14px;
`

const Soldout = styled.button`
  font-size: 14px;
  text-align: center;
  line-height: 22px;
  height: 30px;
  width: 100px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ccc;
  cursor: pointer;
`

export default ListItemSoldOut