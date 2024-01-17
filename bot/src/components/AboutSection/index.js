import React, {useEffect, useState, useRef} from "react";

import {
  AboutContainer,
  InfoWrapper,
  TextWrapper,
  Heading,
  Subtitle,
  CarouselWrapper,
  CarouselSlider,
  CarouselSlide,
  CarouselDots,
  CarouselDot,
} from "./AboutElements";

import slide1 from "../../images/carousel/carousel1.png";
import slide2 from "../../images/carousel/carousel2.png";
import slide3 from "../../images/carousel/carousel3.png";
import slide4 from "../../images/carousel/carousel4.png";
import slide5 from "../../images/carousel/carousel5.png";
import slide6 from "../../images/carousel/carousel6.png";
import slide7 from "../../images/carousel/carousel7.png";
import slide8 from "../../images/carousel/carousel8.png";
import slide9 from "../../images/carousel/carousel9.png";

const images = [
  slide9,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide1
];

const AboutSection = () => {
  
  const delay = 5000;

  const [index, setIndex] = useState(1);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

 useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 2 ? 1 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <AboutContainer id="about">
      <InfoWrapper>
        <TextWrapper>
          <Heading>Sobre o Bot Olympics</Heading>
          <Subtitle>
            O Bot Olympics é a competição de robótica da Universidade de Coimbra. É um evento educativo e formativo e tem como objetivo dar a conhecer o mundo da robótica aos mais curiosos.
            </Subtitle>
          <Subtitle>
            Composto por quatro provas a decorrer em simultâneo para alunos desde o Ensino Básico até ao Ensino Superior, decorre em ambiente tipo <em>hackathon</em> durante quatro dias, onde os participantes têm de desenvolver formas de atingir os objetivos de cada uma das provas.
            </Subtitle>
          <Subtitle>
            Dada a larga faixa etárias dos participantes, o Bot Olympics é uma competição única em Portugal.
            </Subtitle>
          <Subtitle>
            Para que nada te falte, tens acesso a formações e a todo o material necessário para desfrutar da melhor experiência possível. Terás ainda imensas surpresas à tua espera e um programa paralelo recheado de atividades dinâmicas para que aproveites estes dias da melhor maneira.
            </Subtitle>
          <Subtitle>
            Esta competição é organizada por estudantes da Universidade de Coimbra, partindo da parceria entre o <a href="https://www.neeec.pt" target="_blank" rel="noopener noreferrer">NEEEC/AAC</a> e o <a href="https://clrobotica.deec.uc.pt/" target="_blank" rel="noopener noreferrer">Clube de Robótica</a>.
          </Subtitle>
          <Subtitle>
            Se estás curioso para saber como correu a edição de 2022, podes aceder ao <em>website</em> da edição passada <a href="https://past.botolympics.pt/" target="_blank" rel="noopener noreferrer">aqui</a>.
          </Subtitle>
        </TextWrapper>
        <CarouselWrapper>
          <CarouselSlider translate={-index * 100}>
            {images.map((image, idx) => (
                <CarouselSlide 
                  key={idx} 
                  src={image} 
                  alt={`Slide${idx}`}
                  active={index === idx}
                  onClick={() => {
                    if (idx === 0){
                      setIndex(images.length-2)
                    } else if (idx === images.length - 1) {
                      setIndex(1)
                    } else{
                      setIndex(idx)
                    }
                  }}
                />
            ))}
          </CarouselSlider>
          <CarouselDots>
            {images.map((_, idx) => (
              (idx === 0 || idx === images.length - 1) ?
              null :
              <CarouselDot
                key={idx}
                active={index === idx}
                onClick={() => {
                  setIndex(idx);
                }}
              />
            ))}
          </CarouselDots>
        </CarouselWrapper>
      </InfoWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
