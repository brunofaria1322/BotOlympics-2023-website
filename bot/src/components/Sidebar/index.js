import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="competitions" smooth={true}>
            Provas
          </SidebarLink>
          <SidebarLink onClick={toggle} to="sponsors" smooth={true}>
            Apoios
          </SidebarLink>
          <SidebarLink onClick={toggle} to="team" smooth={true}>
            Equipa
          </SidebarLink>
          <SidebarLink onClick={toggle} to="faq" smooth={true}>
            FAQ
          </SidebarLink>
        </SidebarMenu>
        
        <SideBtnWrap>
          <SidebarRoute onClick={toggle} to="results" smooth={true}>
            Resultados
          </SidebarRoute>
        </SideBtnWrap>

      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
