import React, { ReactNode } from 'react'
import styled from 'styled-components'
import PageHeader from '../organisms/common/PageHeader'

type Props = {
  children: ReactNode
  title: string
  add: () => void
  btn: boolean
}

const PageWrapper = (props: Props) => {
  return (
    <Page>
      <PageHeader title={props.title} add={props.add} btn={props.btn}/>
      <Wrapper>{props.children}</Wrapper>
    </Page>
  )
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`

const Wrapper = styled.article`
  padding: 20px 20px 20px;
`

export default PageWrapper