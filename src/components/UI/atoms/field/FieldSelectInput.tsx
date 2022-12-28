import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

type Props = {
  options: string[]
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  width: string
}

type style = {
  width: string
}

const FieldSelectInput = (props: Props) => {
  const handler = (e: any) =>{
    props.setSelected(e.target.value)
  }

  return (
    <Input onChange={handler} value={props.selected} id="filter" width={props.width}>
      {props.options.map((e) => {
        return <option value={e} key={e}>{e}</option>
      })}
    </Input>
  )
}

const Input = styled.select<style>`
  width: ${props => props.width};
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  border: 1px solid grey;
`

export default FieldSelectInput