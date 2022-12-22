import React from 'react'
import ListWrapperNoPanel from '../../layouts/ListWrapperNoPanel'
import ExhibitionListItem from '../../molecules/listitem/ExhibitionListItem'

type Props = {}

const ExhibitionList = (props: Props) => {
  return (
    <ListWrapperNoPanel>
      <ExhibitionListItem border={false} id={"코드"} name={"기획전명"} items={"아이템수"} views={"조회수"} start={"시작일자"} end={"마감일자"} />
    </ListWrapperNoPanel>
  )
}

export default ExhibitionList