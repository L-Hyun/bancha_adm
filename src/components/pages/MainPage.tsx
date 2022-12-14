import React from 'react'
import RowGrid from '../UI/layouts/RowGrid'
import RectanglePanel from '../UI/molecules/RectanglePanel'
import SquarePanel from '../UI/molecules/SquarePanel'

type Props = {}

const MainPage = (props: Props) => {
  return (
    <RowGrid>
      <SquarePanel title={"패널 타이틀"} num={0} link={"/"} />
      <SquarePanel title={"패널 타이틀"} num={0} link={"/"} />
      <SquarePanel title={"패널 타이틀"} num={0} link={"/"} />
      <RectanglePanel title={"직사각형"} num1={0} num2={0} link={"/"} />
    </RowGrid>
  )
}

export default MainPage