import React from 'react'
import ListWrapperNoPanel from '../../layouts/ListWrapperNoPanel'
import SectionListItem from '../../molecules/listitem/SectionListItem'

type Props = {}

const SectionList = (props: Props) => {
  return (
    <ListWrapperNoPanel>
      <SectionListItem border={false} id={"섹션코드"} name={"섹션명"} type={"섹션타입"} items={"상품수"} isActive={"노출여부"} />
    </ListWrapperNoPanel>
  )
}

export default SectionList