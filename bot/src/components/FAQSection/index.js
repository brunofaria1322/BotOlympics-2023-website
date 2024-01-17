import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Data } from "./Data";
import {
  FAQContainer,
  FAQWrapper,
  Heading,
  Accordion,
  Item,
  Wrap,
  Question,
  QuestionSymbol,
  Dropdown,
} from "./FAQElements";

const FAQSection = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };


  return (
    <FAQContainer id="faq">
      <FAQWrapper>
        <Heading>Questões mais Frequentes</Heading>

        <Accordion>
            {Data.map((item, index) => (
              <Item key={index}>
                <Wrap onClick={() => toggle(index)} opened={clicked === index}>
                  <Question>{item.question}</Question>
                  <QuestionSymbol>{clicked === index ? <FiMinus/> : <FiPlus/>}</QuestionSymbol>
                </Wrap>
                <Dropdown opened={clicked === index}>
                  <p dangerouslySetInnerHTML={{__html: item.answer}} />
                </Dropdown>
              </Item>
            ))}
        </Accordion>
      </FAQWrapper>
    </FAQContainer>
  );
};

export default FAQSection;
