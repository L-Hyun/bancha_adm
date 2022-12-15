import React from 'react'
import styled from 'styled-components'
import RowGrid from '../UI/layouts/RowGrid'
import SmallListPanel from '../UI/organisms/SmallListPanel'
import PanelWithTwoNumber from '../UI/organisms/PanelWithTwoNumber'
import PanelWithOneNumber from '../UI/organisms/PanelWithOneNumber'
import LargeListPanel from '../UI/organisms/LargeListPanel'

type Props = {}

const MainPage = (props: Props) => {
  return (
    <RowGrid>
      <SmallListPanel title={"예약건수"} numDay={0} numWeek={10} numMonth={0} link={'/'} />
      <SmallListPanel title={"취소건수"} numDay={0} numWeek={10} numMonth={0} link={'/'} />
      <SmallListPanel title={"방문자수"} numDay={0} numWeek={10} numMonth={0} link={'/'} />
      <FlexCol>
        <PanelWithTwoNumber width={"340px"} height={"272px"} title={"직사각형"} num1={0} num2={0} link={"/"} />
        <PanelWithOneNumber width={"340px"} height={"272px"} title={"파트너 문의"} num={0} link={'/'} />
      </FlexCol>
      <LargeListPanel title={"예약 내역"} link={'/'}/>
    </RowGrid>
  )
}

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 620px;
`

export default MainPage