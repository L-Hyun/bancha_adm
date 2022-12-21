import React from 'react'
import styled from 'styled-components'
import PageTitle from '../../atoms/header/PageTitle'
import ListAddBtn from '../../atoms/list/ListAddBtn'

type Props = {
  title: string
  add: ()=>void
}

const PageHeader = (props: Props) => {
  return (
    <Head>
      <PageTitle title={props.title} />
      <ListAddBtn onClick={props.add} />
    </Head>
  )
}

const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

export default PageHeader