import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #fff;
  background: #010606;
  width: 100%;
  overflow: hidden;

  padding: 100px 0 0 0;
`;

export const InfoWrapper = styled.div`
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
`;

export const Heading = styled.h1`
  margin-bottom: 40px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 1100px;
  margin-bottom: 15px;
  font-size: 18px;
  text-align: justify;
  line-height: 24px;
  color: #fff;
`;

export const CarouselWrapper = styled.div`  
  margin: 0 auto;
  max-width: 1100px;
`;

export const CarouselSlider = styled.div`
  white-space: nowrap;
  max-width: 600px;
  transition: ease 1000ms;
  transform: translate3d(${({ translate }) => translate}%,0,0);
`;

export const CarouselSlide = styled.img`
  display: inline-block;
  width: 100%;
  border-radius: 30px;
  padding: 10px;
  transition: ease 1000ms;

  ${({ active }) => !active && `
    opacity: 0.3;
  `}

  &:hover {
    cursor: pointer;
  }
`;

export const CarouselDots = styled.div`
  text-align: center;
`;

export const CarouselDot = styled.div`
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 50%;

  cursor: pointer;
  margin: 15px 7px 0px;

  background-color: #9B9A9A;

  ${({ active }) => active && `
    background-color: #39A7DF;
  `}
`;
