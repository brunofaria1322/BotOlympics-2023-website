import React from "react";
import { animateScroll as scroll } from "react-scroll";
import LogoTextOnly from "../../images/bot_text_only.svg";

import { 
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

import {
  MdAlternateEmail
} from "react-icons/md";

import {
  FooterContainer,
  SocialMediaWrap,
  SocialLogo,
  SocialLogoLink,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement";

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <SocialMediaWrap>
        <SocialLogoLink to="/" onClick={toggleHome}>
          <SocialLogo src={LogoTextOnly} alt="bot logo"/>
        </SocialLogoLink>
        <SocialIcons>
          <SocialIconLink href="mailto:geral@botolympics.pt" target="_blank" aria-label="Mail" rel="noopener noreferrer">
            <MdAlternateEmail />
          </SocialIconLink>
          <SocialIconLink href="https://www.facebook.com/botolympics" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="https://www.instagram.com/botolympics" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href="https://www.tiktok.com/@botolympics" target="_blank" aria-label="TikTok" rel="noopener noreferrer">
            <FaTiktok />
          </SocialIconLink>
          <SocialIconLink href="https://www.youtube.com/@botolympics" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink href="https://twitter.com/tweetsdoboti" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="https://www.linkedin.com/company/botolympics" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrap>
    </FooterContainer>
  );
};

export default Footer;
