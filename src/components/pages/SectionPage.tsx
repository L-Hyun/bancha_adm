import React from 'react'
import PageWrapper from '../UI/layouts/PageWrapper'
import ListSearch from '../UI/molecules/search/ListSearch';
import ExhibitionList from '../UI/organisms/exhibition/ExhibitionList';

type Props = {}

const SectionPage = (props: Props) => {
  let filters = ["코드", "카테고리명", "활성화"];
  const search = ()=>{};
  const add=()=>{};

  return (
    <PageWrapper title={"섹션"} add={add} btn={true} >
      <ListSearch filters={filters} search={search} />
      <ExhibitionList />
    </PageWrapper>
  )
}

export default SectionPage