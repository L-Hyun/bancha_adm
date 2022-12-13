import React from 'react'
import DetailButton from '../atoms/DetailButton'
import MainNumber from '../atoms/MainNumber'
import TitleName from '../atoms/TitleName'

type Props = {
  title: string
  num: number
}

const MainPanel = (props: Props) => {
  return (
    <div>
      <TitleName title={props.title} />
      <MainNumber num={props.num} />
      <DetailButton />
    </div>
  )
}

export default MainPanel