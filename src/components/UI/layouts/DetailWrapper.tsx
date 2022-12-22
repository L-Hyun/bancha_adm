import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const DetailWrapper = (props: Props) => {
  return (
    <Wrapper>{props.children}</Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default DetailWrapper