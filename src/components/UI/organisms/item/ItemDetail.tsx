import React, { useState } from 'react'
import FieldTextInput from '../../atoms/field/FieldTextInput'
import DetailWrapper from '../../layouts/DetailWrapper'
import FieldRow from '../../molecules/field/FieldRow'

type Props = {
  itemId: string
}

const ItemDetail = (props: Props) => {
  const [id, setId] = useState(props.itemId);
  const [partner, setPartner] = useState("")

  return (
    <DetailWrapper>
      <FieldRow border={false} name={"상품코드"}>
        <FieldTextInput width='200px' value={id} setter={setId} disabled={true}/>
      </FieldRow>
      <FieldRow border={true} name={"파트너"}>
        <FieldTextInput width='200px' value={partner} setter={setPartner} disabled={false}/>
      </FieldRow>
      <FieldRow border={true} name={"카테고리"}>
        <FieldTextInput width='200px' value={partner} setter={setPartner} disabled={false}/>
      </FieldRow>
    </DetailWrapper>
  )
}

export default ItemDetail