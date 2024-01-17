import React from "react";

import {
  RegistrationContainer,
  RegistrationH1,
  RegistrationWrapper,
  RegistrationCard,
  RegistrationLogoWrapper,
  RegistrationIcon,
  RegistrationH2,
  RegistrationH3,
  RegistrationButton,
  RegistrationHyperlink
} from "./RegistrationElements";

import logoISR from "../../images/logos/institucionals/isr.png";
import logoBotnRoll from "../../images/logos/institucionals/bnr/botnroll.png";
import logoFCTUC from "../../images/logos/institucionals/fctuc/fctuc-short.svg";
import comitee from "../../images/team/comitee.JPG";
import women from "../../images/team/women.JPG";

const Registration = () => {
  return (
    <RegistrationContainer>
      <RegistrationH1>Inscrições</RegistrationH1>
      <RegistrationWrapper>
        <RegistrationCard>
          <RegistrationLogoWrapper>
            <RegistrationIcon src={logoISR} alt="ISR logo"/>
          </RegistrationLogoWrapper>
          <RegistrationH2>Prova ISR</RegistrationH2>
          <RegistrationH3>Ensino Básico</RegistrationH3>
          <RegistrationButton href="https://forms.gle/DimyAYdtQpnHt4x99" target="_blank" rel="noopener noreferrer">Inscrever</RegistrationButton>
          <RegistrationHyperlink href="https://1drv.ms/b/s!AhCMlTcCRhk6iLda8mtg1MsXON2VtQ?e=qQP0cI" target="_blank" rel="noopener noreferrer">Regulamento</RegistrationHyperlink>
        </RegistrationCard>

        <RegistrationCard>
          <RegistrationLogoWrapper>
            <RegistrationIcon src={logoBotnRoll} alt="Bot'n Roll logo"/>
          </RegistrationLogoWrapper>
          <RegistrationH2>Prova Bot'n Roll</RegistrationH2>
          <RegistrationH3>Ensino Secundário</RegistrationH3>
          <RegistrationButton href="https://forms.gle/tLMrcZ81gm4TtfJS8" target="_blank" rel="noopener noreferrer">Inscrever</RegistrationButton>
          <RegistrationHyperlink href="https://1drv.ms/b/s!AhCMlTcCRhk6iLdd4RHIrBPYuvizjQ?e=wjtDt4" target="_blank" rel="noopener noreferrer">Regulamento</RegistrationHyperlink>
        </RegistrationCard>

        <RegistrationCard>
          <RegistrationLogoWrapper>
            <RegistrationIcon src={logoFCTUC} alt="FCTUC logo"/>
          </RegistrationLogoWrapper>
          <RegistrationH2>Prova FCTUC</RegistrationH2>
          <RegistrationH3>Ensino Superior</RegistrationH3>
          <RegistrationButton href="https://forms.gle/fPw9zEoe8BBuHj2EA" target="_blank" rel="noopener noreferrer">Inscrever</RegistrationButton>
          <RegistrationHyperlink href="https://1drv.ms/b/s!AhCMlTcCRhk6iLgifOaKJDo8zdBSSg?e=klQWdW" target="_blank" rel="noopener noreferrer">Regulamento</RegistrationHyperlink>
        </RegistrationCard>

        <RegistrationCard img={women}>
          <RegistrationH2>Women Robotics Afternoon</RegistrationH2>
          <RegistrationH3>
            Vem mostrar que as mulheres também fazem parte do mundo da robótica! <br/><br/>
            Se tens curiosidade pela área mas não puderes inscrever-te na competição, vem passar uma tarde connosco, onde terás a oportunidade de explorar este mundo num ambiente mais descontraído e didático!
          </RegistrationH3>
          {/*<RegistrationH3><b>Inscrições em breve!</b></RegistrationH3> */}
          <RegistrationButton href="https://ls.uc.pt/index.php/463473?lang=pt" target="_blank" rel="noopener noreferrer">Inscrever</RegistrationButton>
        </RegistrationCard>

        <RegistrationCard img={comitee}>
          <RegistrationH2>Voluntariado</RegistrationH2>
          <RegistrationH3>
            A inscrição para voluntários do Bot Olympics é aberta a todos os <b>maiores de 18 anos</b>!<br/><br/>
            Podes fazer parte da equipa de logística ou ser mentor de uma das provas.
            Toma nota que ao seres selecionado terás de estar presente na formação que decorrerá uns dias antes do evento.
            </RegistrationH3>  
          {/*<RegistrationH3><b>Inscrições em breve!</b></RegistrationH3> */}
          <RegistrationButton href="https://forms.gle/Gimyf7hbvmyi3QaY6" target="_blank" rel="noopener noreferrer">Inscrever</RegistrationButton>
        </RegistrationCard>

      </RegistrationWrapper>
    </RegistrationContainer>
  );
};

export default Registration;
