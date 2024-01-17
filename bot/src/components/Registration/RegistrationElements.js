import styled from "styled-components";

export const RegistrationContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 60px 0px;
`;

export const RegistrationWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  align-items: center;
  grid-gap: 16px;
  width: 80%;

  @media screen and (max-width: 1120px) {
    grid-template-columns: 1fr;
    max-width: 700px;
  }

`;

export const RegistrationCard = styled.div`
  background: rgba(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  height: 100%;
  min-height: 350px;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  

  ${({img}) => img ? `
    background: url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 2000px rgba(255, 255, 255, 0.75);
    grid-column: span 3;
    
    &:hover {
      transform: scale(1.02);
      box-shadow: inset 0 0 0 2000px rgba(216, 216, 216, 0.85);
    }

    @media screen and (max-width: 1120px) {
      grid-column: span 1 !important;
    }

    h3{
      color: #000;
    }

  ` : `
    &:hover {
      transform: scale(1.02);
      background: rgba(255, 255, 255, 0.85);
    }
  `
  }

`;

export const RegistrationLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 140px;
  margin-bottom: 20px;

  @media screen and (max-width: 1120px) {
    width: 45%;
  }
`;

export const RegistrationIcon = styled.img`
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

export const RegistrationH1 = styled.h1`
  margin: 20px auto 40px auto;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const RegistrationH2 = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 10px;
  color: #000;
`;

export const RegistrationH3 = styled.h3`
  color: #9B9A9A;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const RegistrationButton = styled.a`
  border-radius: 50px;
  background: #39A7DF;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const RegistrationHyperlink = styled.a`
  margin-top: 5px;
  color: #39A7DF;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.2s ease;

  &:visited {
    color: #39A7DF;
  }

  &:hover {
    color: #000;
  }

`;
