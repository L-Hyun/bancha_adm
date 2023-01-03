import React, { ReactNode } from 'react'
import styled from 'styled-components'
import PageHeader from '../organisms/common/PageHeader'

type Props = {
  children: ReactNode
  title: string
}

const PageWrapperWithoutBtn = (props: Props) => {
  return (
    <Page>
      <PageHeader title={props.title} add={()=>{}} btn={false}/>
      <Wrapper>{props.children}</Wrapper>
    </Page>
  )
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 50px;
  margin-left: calc(10% + 40px);

  &::-webkit-scrollbar {
    display: none;
  }
`

const Wrapper = styled.article`
  padding: 20px 20px 20px;
`

export default PageWrapperWithoutBtn