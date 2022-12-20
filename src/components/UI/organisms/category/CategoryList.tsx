import React from 'react'
import styled from 'styled-components'
import CategoryListItem from '../../molecules/listitem/CategoryListItem'

type Props = {}

const CategoryList = (props: Props) => {
  return (
    <FlexCol>
      <CategoryListItem border={false} id={"코드"} name={"카테고리명"} items={"아이템 수"} isActive={"활성화"} />
      <CategoryListItem border={true} id={"코드"} name={"카테고리명"} items={"아이템 수"} isActive={"활성화"} />
      <CategoryListItem border={true} id={"코드"} name={"카테고리명"} items={"아이템 수"} isActive={"활성화"} />
      <CategoryListItem border={true} id={"코드"} name={"카테고리명"} items={"아이템 수"} isActive={"활성화"} />
    </FlexCol>
  )
}

const FlexCol = styled.section`
  background-color: white;
  border-radius: 20px;
  height: 880px;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

export default CategoryList