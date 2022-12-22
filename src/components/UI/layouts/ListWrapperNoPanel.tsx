import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const ListWrapperNoPanel = (props: Props) => {
  return (
    <FlexCol>
      {props.children}
    </FlexCol>
  )
}

const FlexCol = styled.section`
  background-color: white;
  border-radius: 20px;
  height: 700px;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

export default ListWrapperNoPanel