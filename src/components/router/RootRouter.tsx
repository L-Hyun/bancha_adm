import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import CategoryPage from '../pages/CategoryPage'
import ExhibitionPage from '../pages/ExhibitionPage'
import ItemDetailPage from '../pages/ItemDetailPage'
import ItemListPage from '../pages/ItemListPage'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import MemberPage from '../pages/MemberPage'
import PartnerPage from '../pages/PartnerPage'
import RecordPage from '../pages/RecordPage'
import SectionPage from '../pages/SectionPage'
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
          <Route path="/bancha_adm" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
  
          <Route path="/item" element={<ItemListPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/exhibition" element={<ExhibitionPage />} />
          <Route path="/section" element={<SectionPage />} />

          <Route path="/item/:itemId" element={<ItemDetailPage />} />
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