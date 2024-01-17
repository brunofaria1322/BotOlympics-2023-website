// import React, {useState} from "react";
import React from "react";
import { 
  HeroContainer,
  HeroBG,
  VideoBG,
  HeroContent,
  HeroLogo,
  HeroH1,
  HeroBtnWrapper
} from "./HeroElements";
// import {Button} from "../ButtonElements";
import Video from "../../videos/video.mp4";
import logoBotYear from '../../images/bot_year-01.svg';

const HeroSection = () => {
  /* 
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }; 
  */

  return (
    <HeroContainer id='home'>
      <HeroBG>
        <VideoBG autoPlay loop muted playsinline src={Video} type="video/mp4" />
      </HeroBG>
      <HeroContent>
        <HeroLogo>
          <img src={logoBotYear} alt="BotLogoYear" width={"100%"}/>
        </HeroLogo>
        <HeroH1>4 a 7 de maio</HeroH1>
        <HeroBtnWrapper>
          {/*
          <Button to="registration" onMouseEnter={onHover} onMouseLeave={onHover}>
            Inscreve-te
          </Button>
          */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
