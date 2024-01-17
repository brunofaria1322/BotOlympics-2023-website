import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';



export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: -80px;
  z-index: 10;
  transition: 0.8s all ease;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkS)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  width: 125px;
  transition: all 0.2s ease-in-out;
  
  @media screen and (max-width: 768px){
    width: 64px;
  }
`

export const NavTextLogo = styled.div`
display: none;

@media screen and (max-width: 768px) and (min-width: 370px) {
  display: flex;
  align-items: center;
  
  max-height: 18px;
  height: 80%;
  min-width: 100px;
  flex-grow: 1;
  margin: auto 24px;
}
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: flex;
    align-items: center;
    height: 80%;
    width: 64px;
    margin: auto 0;
    
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #39A7DF;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #39A7DF;
  }
`

export const Dummy = styled.div`
  width: 125px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  width: 125px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkS)`
  border-radius: 50px;
  background: #39A7DF;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #39A7DF;
  }
`