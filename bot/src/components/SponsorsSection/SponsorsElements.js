import styled from "styled-components";

export const SponsorsContainer = styled.div`
  text-align: center;
  color: #fff;
  background: #010606;
  overflow: hidden;
  padding: 100px 0px 0px 0px;
`;

export const SponsorsWrapper = styled.div`
  max-width: 1100px;
  width: 80%;
  margin: auto;
`;

export const Heading = styled.h1`
  margin: 20px auto 40px auto;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 1100px;
  margin-top: 30px;
  font-size: 1.2rem;
  text-align: center;
  line-height: 24px;
  color: #fff;
`;

export const CategoryHeading = styled.h2`
  margin: 40px auto 0 auto;
  font-size: 36px;
  color: ${({color}) => color};
  text-align: ${({align}) => align};

  &:after {
    content: "";
    display: inline-block;
    position: relative;
    top: -0.5em;
    width: 100%;
    height: 3px;
    border-radius: 2px;
    ${({align, color}) => align==="left" ? `
      background: linear-gradient(130deg,${color},rgba(0,0,0,0) 80%);
    ` : `
      background: linear-gradient(50deg,rgba(0,0,0,0) 20%,${color} 100%);
    ` } 
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const InstitutionalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  align-items: center;
  grid-gap: 0 30px;

  grid-auto-rows: 150px;

  a {
    max-width: 100px;
    height: 70px;
  }

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

export const GoldWrapper = styled.div`
  margin: 50px auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  
  a {
    max-width: 200px;
    height: 80px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const SilverWrapper = styled.div`
  margin: 50px auto 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 30px;
  
  a {
    max-width: 150px;
    height: 75px;
  }
  
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const BronzeWrapper = styled.div`
  margin: 50px auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  
  a {
    max-width: 100px;
    height: 70px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;


export const SponsorWrapper = styled.a`
  transition: all 0.2s ease-in-out;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  height: 100%;
  max-width: 200px;

  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const SponsorLogo = styled.img`
  max-height: 80%;
  max-width: 100%;
`;