import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import CategoryPage from '../pages/CategoryPage'
import ItemListPage from '../pages/ItemListPage'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import Header from '../UI/organisms/common/Header'
import Menu from '../UI/organisms/common/Menu'

type Props = {}

function RootRouter({}: Props) {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Menu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/item" element={<ItemListPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

const Layout = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  height: calc(100vh - 90px);
`

export default RootRouter