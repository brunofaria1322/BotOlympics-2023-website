import styled from "styled-components";

export const LocationContainer = styled.div`
  color: #fff;
  background: #010606;
  max-width: 100vw;
  max-width: 100dvw;
  overflow: hidden;
  padding: 100px 0px;
`;

export const TextWrapper = styled.div`
  text-align: center;
  max-width: 1100px;
  width: 80%;
  margin: auto;
`;


export const Heading = styled.h1`
  text-align: right;
  margin: 20px auto 60px auto;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;


export const MapWrapper = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;