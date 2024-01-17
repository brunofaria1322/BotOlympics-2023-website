import styled from "styled-components";

export const FAQContainer = styled.div`
  color: #fff;
  background: #010606;
  width: 100%;
  overflow: hidden;
  padding: 100px 0px 0px 0px;
`;

export const FAQWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 80%;
  margin: auto;
  max-width: 1100px;
  
  justify-content: center;
`;

export const TextWrapper = styled.div`
  max-width: 1100px;
  padding-top: 0;
  padding: 60px 0px;
`;

export const Heading = styled.h1`
  text-align: right;
  margin: 20px auto 40px auto;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #9B9A9A;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  text-align: left;
  
  padding: 2rem;

  &:hover {
    h2, svg{
      transition: color 0.2s ease-in-out;
      color: #39A7DF;
    }
  }

  ${({ opened }) => opened && `
    h2, svg{
      transition: color 0.2s ease-in-out;
      color: #39A7DF;
    }
  `}
`;

export const Question = styled.h2`
  margin-right: 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  transition: color 0.2s ease-in-out;
`;

export const QuestionSymbol = styled.div`
  margin: auto 0 auto auto;
  font-size: 2rem;
  color: #fff;
`;

export const Dropdown = styled.div`
  transition: 0.8s all ease;
  max-height: 0px;
  width: 100%;
  
  overflow: hidden;

  p {
    padding: 2rem;
    font-size: 18px;
    text-align: left;
    line-height: 24px;
  }

  ${({ opened }) => opened && `
    max-height: 100vh;
    max-height: 100dvh;
    border-top: 1px solid #39A7DF;
  `}
`;


