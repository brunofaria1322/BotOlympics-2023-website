import React from "react";

import {
  TeamContainer,
  TeamWrapper,
  Heading,
  BoardWrapper,
  OthersWrapper,
  PersonWrapper,
  PersonImg,
  PersonName,
  PersonRole
} from "./TeamElements";

// Board
import joao from "../../images/team/joao.png";
import casca from "../../images/team/casca.png";
import jdelgado from "../../images/team/jose_delgado.jpg";

// Others
import catarina from "../../images/team/catarina.png";
import duarte from "../../images/team/duarte.png";

import diana from "../../images/team/diana.png";
import erica from "../../images/team/erica.png";

import rafael from "../../images/team/rafael.png";

import augusto from "../../images/team/augusto.png";
import dylan from "../../images/team/dylan.png";
import jpaixao from "../../images/team/jose_paixao.png";
import manuel from "../../images/team/manuel.png";
import tobias from "../../images/team/tobias.png";

import daniela from "../../images/team/daniela.png";

import adelino from "../../images/team/adelino.png";
import rita from "../../images/team/rita.png";
import matilde from "../../images/team/matilde.png";
import pedro_teixeira from "../../images/team/pedro_teixeira.png";

import bruno from "../../images/team/bruno.png";
import ana from "../../images/team/ana.png";

import marta from "../../images/team/marta.png";

import alexandre from "../../images/team/alexandre.png";

import debora from "../../images/team/debora.png";
import joaquim from "../../images/team/joaquim.png";
import miguel_branco from "../../images/team/miguel_branco.png";
import miguel_loureiro from "../../images/team/miguel_loureiro.png";



const TeamSection = () => {
  
  return (
    <TeamContainer id="team">
    <Heading>Equipa</Heading>
      <TeamWrapper>
        <BoardWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/jndvasco/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={joao} alt="João Vasco" />
            <PersonName>João Vasco</PersonName>
            <PersonRole>Coordenação Geral</PersonRole>
          </PersonWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/josecasca/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={casca} alt="José Casca" />
            <PersonName>José Casca</PersonName>
            <PersonRole>Coordenação Geral</PersonRole>
          </PersonWrapper>
          <></>
        </BoardWrapper>
        <OthersWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/catarina-bispo-a9406b102/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={catarina} alt="Catarina Bispo" />
            <PersonName>Catarina Bispo</PersonName>
            <PersonRole>Administração</PersonRole>
          </PersonWrapper>
          <PersonWrapper>
            <PersonImg src={duarte} alt="Duarte Santos" />
            <PersonName>Duarte Santos</PersonName>
            <PersonRole>Administração</PersonRole>
          </PersonWrapper>

          <PersonWrapper>
            <PersonImg src={diana} alt="Diana Macedo" />
            <PersonName>Diana Macedo</PersonName>
            <PersonRole>Comunicação</PersonRole>
          </PersonWrapper>
          <PersonWrapper>
            <PersonImg src={erica} alt="Érica Marques" />
            <PersonName>Érica Marques</PersonName>
            <PersonRole>Comunicação</PersonRole>
          </PersonWrapper>

          <PersonWrapper href="https://www.linkedin.com/in/rafael-lu%C3%ADs-38690b1a3/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={rafael} alt="Rafael Luís" />
            <PersonName>Rafael Luís</PersonName>
            <PersonRole>Contacto com as Escolas</PersonRole>
          </PersonWrapper>

          <PersonWrapper href="https://www.linkedin.com/in/augustosamussone/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={augusto} alt="Augusto Samussone" />
            <PersonName>Augusto Samussone</PersonName>
            <PersonRole>Equipa Técnica e Regulamentos</PersonRole>
          </PersonWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/dylandenizon/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={dylan} alt="Dylan Denizon" />
            <PersonName>Dylan Denizon</PersonName>
            <PersonRole>Equipa Técnica e Regulamentos</PersonRole>
          </PersonWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/jos%C3%A9-paix%C3%A3o/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={jpaixao} alt="José Paixão" />
            <PersonName>José Paixão</PersonName>
            <PersonRole>Equipa Técnica e Regulamentos</PersonRole>
          </PersonWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/manueladsantos/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={manuel} alt="Manuel Santos" />
            <PersonName>Manuel Santos</PersonName>
            <PersonRole>Equipa Técnica e Regulamentos</PersonRole>
          </PersonWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/tobias-marsh-hulland/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={tobias} alt="Tobias Marsh-Hulland" />
            <PersonName>Tobias Marsh-Hulland</PersonName>
            <PersonRole>Equipa Técnica e Regulamentos</PersonRole>
          </PersonWrapper>

          <PersonWrapper href="https://www.linkedin.com/in/daniela-fernandes-29078320b/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={daniela} alt="Daniela Fernandes" />
            <PersonName>Daniela Fernandes</PersonName>
            <PersonRole>Gestão de Equipa</PersonRole>
          </PersonWrapper>

          <PersonWrapper href="https://www.linkedin.com/in/adelino-pais-b19257245/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={adelino} alt="Adelino Pais" />
            <PersonName>Adelino Pais</PersonName>
            <PersonRole>Imagem</PersonRole>
          </PersonWrapper>
          <PersonWrapper>
            <PersonImg src={rita} alt="Ana Rita Mendes" />
            <PersonName>Ana Rita Mendes</PersonName>
            <PersonRole>Imagem</PersonRole>
          </PersonWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/matilde-carvalho-9b2185131/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={matilde} alt="Matilde Carvalho" />
            <PersonName>Matilde Carvalho</PersonName>
            <PersonRole>Imagem</PersonRole>
          </PersonWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/pedrogarciateixeira/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={pedro_teixeira} alt="Pedro Teixeira" />
            <PersonName>Pedro Teixeira</PersonName>
            <PersonRole>Imagem</PersonRole>
          </PersonWrapper>

          <PersonWrapper href="https://www.linkedin.com/in/bruno-faria/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={bruno} alt="Bruno Faria" />
            <PersonName>Bruno Faria</PersonName>
            <PersonRole>Informática</PersonRole>
          </PersonWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/anabsf/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={ana} alt="Ana Fernandes" />
            <PersonName>Ana Fernandes</PersonName>
            <PersonRole>Informática e Programa Paralelo</PersonRole>
          </PersonWrapper>
          <PersonWrapper>
            <PersonImg src={marta} alt="Marta Martins" />
            <PersonName>Marta Martins</PersonName>
            <PersonRole>Programa Paralelo</PersonRole>
          </PersonWrapper>

          <PersonWrapper>
            <PersonImg src={alexandre} alt="Alexandre Bernardino" />
            <PersonName>Alexandre Bernardino</PersonName>
            <PersonRole>Inscrições</PersonRole>
          </PersonWrapper>

          <PersonWrapper href="https://www.linkedin.com/in/d%C3%A9bora-sei%C3%A7a-9a31181b5/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={debora} alt="Débora Seiça" />
            <PersonName>Débora Seiça</PersonName>
            <PersonRole>Patrocínios</PersonRole>
          </PersonWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/joaquimmeruje2001/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={joaquim} alt="Joaquim Meruje" />
            <PersonName>Joaquim Meruje</PersonName>
            <PersonRole>Patrocínios</PersonRole>
          </PersonWrapper>
          <PersonWrapper>
            <PersonImg src={miguel_branco} alt="Miguel Branco" />
            <PersonName>Miguel Branco</PersonName>
            <PersonRole>Patrocínios</PersonRole>
          </PersonWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/miguel-loureiro-bba33620a/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={miguel_loureiro} alt="Miguel Loureiro" />
            <PersonName>Miguel Loureiro</PersonName>
            <PersonRole>Patrocínios</PersonRole>
          </PersonWrapper>
          <PersonWrapper href="https://www.linkedin.com/in/jos%C3%A9-delgado-053b11234/"  target="_blank" rel="noopener noreferrer">
            <PersonImg src={jdelgado}alt="José Delgado" />
            <PersonName>José Delgado</PersonName>
            <PersonRole>Tesouraria</PersonRole>
          </PersonWrapper>
        </OthersWrapper>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default TeamSection;
