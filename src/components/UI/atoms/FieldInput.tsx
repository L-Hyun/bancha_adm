import React from 'react'

type Props = {
  value: string;
}

const FieldInput = (props: Props) => {
  return (
    <input value={props.value}/>
  )
}

export default FieldInput