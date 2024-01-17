import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #010606;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  height: 100dvh;
  max-width: 100vw;
  max-width: 100dvw;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
`;

export const HeroBG = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBG = styled.video`
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #010606;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1100px;
  width: 100%;
  max-height: 100vh;
  max-height: 100dvh;
  height: 100%;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: auto;
  margin-bottom: 24px;
  padding: 0 24px;
  max-height: 60%;
  max-width: 600px;
  width: 80%;
  min-width: 30px;

  img {
    height: 100%;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
