import React from 'react'
import styled from 'styled-components'
import ListPanelItemValue from '../atoms/main/ListPanelItemValue'
import ListPanelItemTitle from '../atoms/main/ListPanelItemTitle'

type Props = {
  title: string
  date: string
  qty: string
  price: string
}

const ListPanelItem = (props: Props) => {
  return (
    <Wrapper>
      <ListPanelItemTitle title={props.title} />
      <ListPanelItemValue val={props.date} />
      <ListPanelItemValue val={props.qty} />
      <ListPanelItemValue val={props.price} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  border-top: 1px solid grey;
`

export default ListPanelItem