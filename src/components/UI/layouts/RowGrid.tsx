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
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`

export default RowGrid