import React, { useState } from "react";
import styled from "styled-components";
import MenuStore from "../../store/MenuStore";
import MenuButton from "../atoms/MenuButton";

type Props = {
	menus: string[],
	idx: number,
};

const MenuSection = (props: Props) => {
  const {selected, select} = MenuStore();
  const [isOpened, setIsOpened] = useState(false);

  const slideDown = {display: 'block'}
  const slideUp = {display: 'none'}

	return (
		<Wrapper>
			<MenuButton name={props.menus[0]} idx={props.idx} onClick={() => {setIsOpened(!isOpened)}}/>
			<SubMenuList style={isOpened ? slideDown : slideUp} >
				{props.menus.slice(1).map((e, idx) => {
					return (
            <SubMenuItem key={`subMenuItem_${idx}_${e}`}><MenuButton
							name={e}
							idx={idx + props.idx}
							onClick={() => {
								select(idx + props.idx);
							}}
						/></SubMenuItem>
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
  padding-left: 20px;
  margin: 4px 0 10px 0;
`
const SubMenuItem = styled.li`
  list-style: none;
  color: grey;
`

export default MenuSection;
