import React from 'react'
import styled from 'styled-components'
import PanelDetailButton from '../../atoms/panel/PanelDetailButton'
import PanelTitle from '../../atoms/panel/PanelTitle'
import SmallListPanelItem from '../../molecules/panel/SmallListPanelItem'

type Props = {
  title: string
  numDay: string
  numWeek: string
  numMonth: string
  link: string
}

const ListPanel = (props: Props) => {
  return (
    <Wrapper>
      <PanelTitle title={props.title} />
      <FlexCol>
        <SmallListPanelItem text={"일"} num={props.numDay} />
        <Divider />
        <SmallListPanelItem text={"주"} num={props.numWeek} />
        <Divider />
        <SmallListPanelItem text={"월"} num={props.numMonth} />
      </FlexCol>
      <PanelDetailButton link={props.link}/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: white;
  padding: 12px 20px 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  width: 30%;
  height: 30%;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: grey;
`

export default ListPanel