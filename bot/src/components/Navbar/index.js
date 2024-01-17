import React from "react";
import { FaBars } from "react-icons/fa";
//import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavTextLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  //Dummy,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logoBot from "../../images/bot-01.svg";
import LogoTextOnly from "../../images/bot_text_only.svg";

const Navbar = ({ toggle }) => {


  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 180 ||
      document.documentElement.scrollTop > 180
    ) {
      document.getElementsByTagName("nav")[0].style.top = "0px";
    } else {
      document.getElementsByTagName("nav")[0].style.top = "-80px";
    }
  }

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo 
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
          >
            <img src={logoBot} alt="BotLogo" width="48px" className="navLogo"/>
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="competitions"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Provas
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="sponsors"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Apoios
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="team"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Equipa
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="faq"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                FAQ
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavTextLogo>
            <img src={LogoTextOnly} alt="BotTextLogo"  height="80%" style={{margin: 'auto'}} />
          </NavTextLogo>
          <MobileIcon onClick={toggle}>
            <FaBars style={{marginLeft: 'auto'}}/>
          </MobileIcon>
          <NavBtn>
            <NavBtnLink 
              to="results"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={0}
            >
              Resultados</NavBtnLink>
          </NavBtn>
          
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
