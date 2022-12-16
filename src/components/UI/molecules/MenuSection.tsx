import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuStore from "../../store/MenuStore";
import MenuButton from "../atoms/menu/MenuButton";

type Props = {
	menus: string[],
	idx: number,
};

const MenuSection = (props: Props) => {
  const { select, menus } = MenuStore();
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);

  const slideDown = {display: 'block'}
  const slideUp = {display: 'none'}
  const mmm = (idx: number)=>{
    let temp = props.idx.toString() + idx.toString();
    select(temp);
    navigate(menus[temp]);
  }

	return (
		<Wrapper>
			<MenuButton padding={false} name={props.menus[0]} idx={"0"} onClick={() => {setIsOpened(!isOpened)}} />
			<SubMenuList style={isOpened ? slideDown : slideUp} >
				{props.menus.slice(1).map((e, idx) => {
					return (
            <SubMenuItem key={`subMenuItem_${idx}_${e}`}>
              <MenuButton
                padding={true}
                name={e}
                idx={props.idx.toString() + idx.toString()}
                onClick={() => {
                  mmm(idx);
                }}
              />
            </SubMenuItem>
					);
				})}
			</SubMenuList>
		</Wrapper>
	);
};

const Wrapper = styled.div`
  /* margin-bottom: 40px; */
`

const SubMenuList = styled.ul`
  padding-left: 0px;
  margin: 4px 0 10px 0;
`
const SubMenuItem = styled.li`
  list-style: none;
  color: grey;
`

export default MenuSection;
