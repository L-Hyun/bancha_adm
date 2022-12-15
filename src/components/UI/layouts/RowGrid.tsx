import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode;
}

const RowGrid = (props: Props) => {
  return (
    <ScreenLayout>{props.children}</ScreenLayout>
  )
}

const ScreenLayout = styled.article`
  padding: 20px 10px 20px 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;  
  }

`

export default RowGrid