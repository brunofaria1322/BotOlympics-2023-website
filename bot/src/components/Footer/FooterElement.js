import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #000;
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin: 0;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 90%;
  margin: auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    height: 80px;
  }
`;

export const SocialLogoLink = styled.div`
  color: #fff;
  font-size: 24px;
  height: 24px;
`;

export const SocialLogo = styled.img`
  display: inline-block;
  height: 100%;
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-weight: bold;
`;


export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  height: 24px;
`;

