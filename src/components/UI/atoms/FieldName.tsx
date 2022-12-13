import React from 'react'
import styled from 'styled-components'

type Props = {
  name: string;
}

const FieldName = (props: Props) => {
  return (
    <div>{props.name}</div>
  )
}


export default FieldName