import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const PannelWrapper = (props: Props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 20px;
`

export default PannelWrapper