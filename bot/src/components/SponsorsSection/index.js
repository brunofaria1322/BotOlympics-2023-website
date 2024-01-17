import React from "react";

import {
  SponsorsContainer,
  SponsorsWrapper,
  Heading,
  Subtitle,
  CategoryHeading,
  InstitutionalWrapper,
  GoldWrapper,
  SilverWrapper,
  BronzeWrapper,
  SponsorWrapper,
  SponsorLogo,
} from "./SponsorsElements";

// INSTITUTIONAL
import alma from "../../images/logos/institucionals/alma.svg";
import botnroll from "../../images/logos/institucionals/bnr/botnroll-white.png";
import cmc from "../../images/logos/institucionals/cmc.svg";
import deec from "../../images/logos/institucionals/deec.png";
import fctuc from "../../images/logos/institucionals/fctuc/fctuc.svg";
import isr from "../../images/logos/institucionals/isr.png";
import incode from "../../images/logos/institucionals/incode.svg";
import robothink from "../../images/logos/institucionals/robothink/robothink.svg";
import exploratorio from "../../images/logos/institucionals/exploratorio/exploratorio.png";
import itecons from "../../images/logos/institucionals/itecons/itecons-white.svg";
import cctic from "../../images/logos/institucionals/cctic/cctic_soft.png";
import equal_steam from "../../images/logos/institucionals/equal-steam.png";

// GOLD
import eredes from "../../images/logos/gold/eredes.png";
import valmet from "../../images/logos/gold/valmet.svg";
import altri from "../../images/logos/gold/altri.png";

// SILVER
import efapel from "../../images/logos/silver/efapel.png";

// BRONZE
import sew from "../../images/logos/bronze/sew.svg";
import inesc from "../../images/logos/bronze/inesc.png";



const SponsorsSection = () => {
  
  return (
    <SponsorsContainer id="sponsors">
      <SponsorsWrapper>
        <Heading>Apoios</Heading>
         
        <CategoryHeading align="right" color="#d6ad60">Gold</CategoryHeading>
        <GoldWrapper>
          <SponsorWrapper href="https://www.e-redes.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={eredes} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://www.valmet.com" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={valmet} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://www.altri.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={altri} alt="logo"/>
          </SponsorWrapper>
        </GoldWrapper>

        <CategoryHeading align="left" color="#c0c0c0">Silver</CategoryHeading>
        <SilverWrapper>
          <SponsorWrapper href="https://www.efapel.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={efapel} alt="logo"/>
          </SponsorWrapper>
        </SilverWrapper>

        <CategoryHeading align="right" color="#cd7f32">Bronze</CategoryHeading>
        <BronzeWrapper>
          <SponsorWrapper href="https://www.sew-eurodrive.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={sew} alt="logo"/>
          </SponsorWrapper>
          
          <SponsorWrapper href="https://www.uc.pt/en/org/inescc" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={inesc} alt="logo"/>
          </SponsorWrapper>
        </BronzeWrapper>

        
        <CategoryHeading align="left" color="#39A7DF">Institucionais</CategoryHeading>
        <InstitutionalWrapper>
          <SponsorWrapper href="https://almashopping.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={alma} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://www.botnroll.com" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={botnroll} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://www.cm-coimbra.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={cmc} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://web.deec.uc.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={deec} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://www.uc.pt/fctuc" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={fctuc} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://www.isr.uc.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={isr} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://www.incode2030.gov.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={incode} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://www.robothink.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={robothink} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://exploratorio.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={exploratorio} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://www.itecons.uc.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={itecons} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://softciencias.pt" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={cctic} alt="logo"/>
          </SponsorWrapper>
          <SponsorWrapper href="https://www.uc.pt/equal.steam/atividade13/" target="_blank" rel="noopener noreferrer">
            <SponsorLogo src={equal_steam} alt="logo"/>
          </SponsorWrapper>
        </InstitutionalWrapper>
        
        
        <Subtitle>
          Gostava de apoiar o nosso evento? Entre em contacto connosco através de <a href="mailto:patrocinios@botolympics.pt"  target="_blank" rel="noopener noreferrer">patrocinios@botolympics.pt</a>.
        </Subtitle>
      </SponsorsWrapper>
    </SponsorsContainer>
  );
};

export default SponsorsSection;
