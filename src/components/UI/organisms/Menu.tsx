import React from 'react'
import styled from 'styled-components';
import MenuStore from '../../store/MenuStore';
import UserInfo from '../molecules/UserInfo';
import MenuSection from '../molecules/MenuSection';

type Props = {
}

const Menu = (props: Props) => {
  let menus = [['환경', '환경 설정'], ['상품', '상품 관리', '공동구매', '카테고리', '후기', '섹션', '기획전'], ['회원', '일반회원', '공급자', '포인트'], ['예약 내역', '예약 내역'], ['게시판', '이벤트', '배너', '검색어'], ['로그', '로그'], ['알림', '알림'], ['서드파티', 'icode', '결제']];

  return (
    <MenuContainer>
      <UserInfo />
      {menus.map((e, idx)=>{
        return <MenuSection menus={e} idx={idx} key={`subMenuSection_${idx}`}/>
      })}
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 200px;
`

export default Menu