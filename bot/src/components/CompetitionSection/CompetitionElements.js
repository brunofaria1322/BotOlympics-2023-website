import styled, { keyframes } from "styled-components";

export const CompetitionContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 100px 0px 0px 0px;
`;

export const CompetitionWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  align-items: center;
  grid-gap: 16px;
  width: 80%;

  @media screen and (max-width: 1250px) {
    grid-template-columns: 1fr;
    max-width: 700px;
  }
`;

export const CompetitionCard = styled.div`
  background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      url(${({img}) => img});
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  padding: 30px;
  transition: all 0.2s ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  color: white;

  &:hover {
    transform: scale(1.02);
  }
`;

export const CompetitionH1 = styled.h1`
  margin: 20px auto 40px auto;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CompetitionH2 = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 10px;
`;

export const CompetitionH3 = styled.h3`
  color: #9B9A9A;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const CompetitionP = styled.p`
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const CompetitionButtonsWrapper = styled.div`
  margin: auto;
  overflow: hidden;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const CompetitionButton = styled.button`
  margin: auto;
  width: 100%;
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

  &:hover {
    background: #fff;
    color: #010606;
  }
`;

export const CompetitionH4 = styled.h4`
  font-size: 1.4rem;
  text-align: center;
  font-weight: 500;
  margin: 16px auto;

  // draw a line before and after the text filling the whole width
  &:before,
  &:after {
    content: "";
    display: inline-block;
    width: 50%;
    margin: 0 1em 0 -55%;
    vertical-align: middle;
    border-bottom: 1px solid;
  }
  &:after {
    margin: 0 -55% 0 1em;
  }
`;

export const CalendarsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  align-items: center;
  grid-gap: 16px;
  width: 100%;
  margin: 0px auto;

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;


export const CompetitionCalendar = styled.a`
  margin: 0px;
  border-radius: 50px;
  background: #39A7DF;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  text-decoration: none;

  &:hover {
    background: #fff;
    color: #010606;
  }
`;

export const CompetitionPopUp = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  
  height: 100%;
  width: 100%;

  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.5);

  :hover {
    cursor: pointer;
  }
`;



export const CompetitionHyperlink = styled.a`
  margin-top: 16px;
  color: #39A7DF;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.2s ease;

  &:visited {
    color: #39A7DF;
  }

  &:hover {
    color: #fff;
  }

`;

export const CompetitionPopUpWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  max-width: 700px;
  
  @media only screen and (max-width: 700px){
    width: 100%;
  }
`;

export const CompetitionPopUpCard = styled.img`
  display: block;
  margin: auto;

  width: 100%;

  animation: ${keyframes`
    from {transform:scale(0)}
    to {transform:scale(1)}
  `} 0.6s;
`;