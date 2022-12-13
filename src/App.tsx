import React from 'react';
import styled from 'styled-components';
import Menu from './components/UI/organisms/Menu';

function App() {
  return (
    <Layout>
      <Menu />
    </Layout>
  );
}

const Layout = styled.div`
  background-color: #8ac28d66;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

export default App;
