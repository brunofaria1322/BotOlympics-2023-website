import React, {useState} from "react";

import basico from "../../images/basico.png";
import secundario from "../../images/secundario.png";
import superior from "../../images/uni.png";

import prizes_basico from "../../images/prizes/basico.png";
import prizes_secundario from "../../images/prizes/secundario.png";
import prizes_superior from "../../images/prizes/superior.png";

import {
  CompetitionContainer,
  CompetitionH1,
  CompetitionWrapper,
  CompetitionCard,
  CompetitionH2,
  CompetitionH3,
  CompetitionP,
  CompetitionButtonsWrapper,
  CompetitionButton,
  CompetitionH4,
  CalendarsWrapper,
  CompetitionHyperlink,
  CompetitionCalendar,
  CompetitionPopUp,
  CompetitionPopUpWrapper,
  CompetitionPopUpCard
} from "./CompetitionElements";

const CompetitionSection = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [popUpImage, setPopUpImage] = useState(null);


  return (
    <CompetitionContainer id='competitions'>
      <CompetitionH1>Provas</CompetitionH1>
      <CompetitionWrapper>
        <CompetitionCard img={basico}>
          <CompetitionH2>Prova ISR</CompetitionH2>
          <CompetitionH3>Ensino Básico</CompetitionH3>
          <CompetitionP>
            Nesta prova vais encontrar um desafio indicado para os iniciantes da robótica e da programação. Utilizando um kit robótico intuitivo e fácil de usar, o MBot2, acompanhado por programação em blocos tens tudo o que precisas para completar os desafios que terás de enfrentar nomeadamente seguir uma linha, desviar de obstáculos.
          </CompetitionP>
          <CompetitionButtonsWrapper>
            <CompetitionButton 
              onClick={() => {
                setPopUpImage(prizes_basico);
                setIsOpen(true);
              }}
            >
              Prémios
            </CompetitionButton>
            <CompetitionH4>Calendários</CompetitionH4>
            <CalendarsWrapper>
              <CompetitionCalendar
                href="https://calendar.google.com/calendar/u/2?cid=MDJkZGM5MmQ2ZTllMTYxMWQxZjg0YzYzMDVkOWI4NjhjNmJkZDkyZDA3ZjI1MjdiYzIwYWExOTdjNDE2YWU5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </CompetitionCalendar>
              <CompetitionCalendar
                href="https://calendar.google.com/calendar/ical/02ddc92d6e9e1611d1f84c6305d9b868c6bdd92d07f2527bc20aa197c416ae98%40group.calendar.google.com/public/basic.ics"
                target="_blank"
                rel="noopener noreferrer"
              >
                iCalendar
              </CompetitionCalendar>
            </CalendarsWrapper>
          </CompetitionButtonsWrapper>
          <CompetitionHyperlink href="https://1drv.ms/b/s!AhCMlTcCRhk6iLda8mtg1MsXON2VtQ?e=DtWJ3q" target="_blank" rel="noopener noreferrer">Regulamento</CompetitionHyperlink>
        </CompetitionCard>

        <CompetitionCard img={secundario}>
          <CompetitionH2>Prova Bot'n Roll</CompetitionH2>
          <CompetitionH3>Ensino Secundário</CompetitionH3>
          <CompetitionP>
            Aqui vais encontrar um desafio indicado para os entusiastas da robótica e da programação. Utilizando uma base robótica, o Bot'N Roll ONE A, acompanhada de um Arduino e a sua linguagem de programação baseada em C/C++ tens tudo o que precisas para completar os desafios que terás de enfrentar nomeadamente seguir uma linha respeitando as ordens que forem dadas e desviar de obstáculos.
          </CompetitionP>
          <CompetitionButtonsWrapper>
            <CompetitionButton 
              onClick={() => {
                setPopUpImage(prizes_secundario);
                setIsOpen(true);
              }}
            >
              Prémios
            </CompetitionButton>
            <CompetitionH4>Calendários</CompetitionH4>
            <CalendarsWrapper>
              <CompetitionCalendar
                href="https://calendar.google.com/calendar/u/2?cid=MjVmNzQwNGI1YTIxNGY3MmY2OTRhMDRiNzI2MDA3YWRiZGNlNmY3YWRlYzJkMjQ0ZWU4OTQ5ODMzZTMwZjA2M0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </CompetitionCalendar>
                <CompetitionCalendar
                  href="https://calendar.google.com/calendar/ical/25f7404b5a214f72f694a04b726007adbdce6f7adec2d244ee8949833e30f063%40group.calendar.google.com/public/basic.ics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iCalendar
                </CompetitionCalendar>
              </CalendarsWrapper>
          </CompetitionButtonsWrapper>
          <CompetitionHyperlink href="https://1drv.ms/b/s!AhCMlTcCRhk6iLdd4RHIrBPYuvizjQ?e=wjtDt4" target="_blank" rel="noopener noreferrer">Regulamento</CompetitionHyperlink>
        </CompetitionCard>

        <CompetitionCard img={superior}>
          <CompetitionH2>Prova FCTUC</CompetitionH2>
          <CompetitionH3>Ensino Superior</CompetitionH3>
          <CompetitionP>
            Este desafio é indicado para os entusiastas da robótica e da programação. Utilizando uma base robótica, desenvolvida pelo Clube de Robótica, acompanhada de um Arduino e a sua linguagem de programação baseada em C/C++ tens tudo o que precisas para completar o desafio que te é proposto, navegar numa casa simulada e procurar uma chama em um dos quartos que terás de apagar para ser bem sucedido. 
          </CompetitionP>
          <CompetitionButtonsWrapper>
            <CompetitionButton 
              onClick={() => {
                setPopUpImage(prizes_superior);
                setIsOpen(true);
              }}
            >
              Prémios
            </CompetitionButton>
            <CompetitionH4>Calendários</CompetitionH4>
            <CalendarsWrapper>
              <CompetitionCalendar
                href="https://calendar.google.com/calendar/u/2?cid=OGQzZDNkYmY3Y2M0NjU0MDk5Nzk4MzE5NjczMzY1M2YwZjQzMmUzY2Q3NjFlOTQ0MTMzYmFhZDJmOTUwZTI3OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </CompetitionCalendar>
                <CompetitionCalendar
                  href="https://calendar.google.com/calendar/ical/8d3d3dbf7cc46540997983196733653f0f432e3cd761e944133baad2f950e279%40group.calendar.google.com/public/basic.ics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iCalendar
                </CompetitionCalendar>
              </CalendarsWrapper>
          </CompetitionButtonsWrapper>
          <CompetitionHyperlink href="https://1drv.ms/b/s!AhCMlTcCRhk6iLgifOaKJDo8zdBSSg?e=klQWdW" target="_blank" rel="noopener noreferrer">Regulamento</CompetitionHyperlink>
        </CompetitionCard>

      </CompetitionWrapper>
      
      <CompetitionPopUp 
        open={isOpen}
        onClick={() => setIsOpen(false)}
      >
        <CompetitionPopUpWrapper>
          <CompetitionPopUpCard src={popUpImage}/>
        </CompetitionPopUpWrapper>
      </CompetitionPopUp>


    </CompetitionContainer>
  );
};

export default CompetitionSection;