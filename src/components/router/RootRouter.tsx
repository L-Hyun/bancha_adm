import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import ItemListPage from '../pages/ItemListPage'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import Header from '../UI/organisms/Header'
import Menu from '../UI/organisms/Menu'

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
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

const Layout = styled.div`
  display: flex;
  justify-content: flex-start;
  height: calc(100vh - 90px);
`

export default RootRouter