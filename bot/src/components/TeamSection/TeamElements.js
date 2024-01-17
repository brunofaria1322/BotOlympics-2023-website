import styled from "styled-components";

export const TeamContainer = styled.div`
  text-align: center;
  color: #fff;
  background: #010606;
  width: 100%;
  overflow: hidden;
  padding: 100px 0px 0px 0px;
`;

export const TeamWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-width: 1100px;
  width: 80%;
  margin: auto;
  
  justify-content: center;
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

export const BoardWrapper = styled.div`
  margin: 50px auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 30px;

  @media screen and (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

export const OthersWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  
  transition: all 0.2s ease-in-out;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  align-items: center;
  grid-gap: 30px;

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

export const PersonWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin: auto;

  height: 250px;

  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    h2,h3 {
      color: #39A7DF;
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const PersonImg = styled.img`
  height: 125px;
  width: 125px;
  margin-bottom: 15px;
  border-radius: 50%;
`;

export const PersonName = styled.h2`
  text-align: center;
  font-size: 16px;
  margin-bottom: 5px;
  color: #fff;
`;

export const PersonRole = styled.h3`
  color: #9B9A9A;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
