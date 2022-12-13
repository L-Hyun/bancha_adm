import React from 'react'
import styled from 'styled-components'
import MenuSection from '../molecules/MenuSection';
import Menu from '../organisms/Menu';

type Props = {
}

const MainTemplates = (props: Props) => {
  return (
    <Layout>
      <Menu />
    </Layout>
  )
}

const Layout = styled.div`
  background-color: #8ac28d66;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

export default MainTemplates