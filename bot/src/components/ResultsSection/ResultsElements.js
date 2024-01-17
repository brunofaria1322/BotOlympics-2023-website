import styled from "styled-components";

export const ResultsContainer = styled.div`
  text-align: center;
  color: #fff;
  background: #010606;
  overflow: hidden;
  padding: 100px 0px 0px 0px;
`;

export const ResultsWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
  width: 80%;
`;

export const ResultsCategotyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const ResultsCategoryButton = styled.a`
  margin:${({ isLeft }) => (isLeft ? "auto auto auto 0" : "auto 0 auto auto")};
  padding: 0.5rem 1rem;
  color: #9B9A9A;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #39A7DF;
  }
`;

export const ResultsH1 = styled.h1`
  margin: 20px auto 40px auto;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ResultsH2 = styled.h2`
  font-size: 2.2rem;
  text-align: center;
`;

export const ResultsP = styled.p`
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
  color: #fff;
`;

export const ResultsTableWrapper = styled.div`
  overflow: auto;
`

export const ResultsTable = styled.table`
  width: 100%;
  border-spacing: 0;
  margin: auto;
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
  color: #fff;
  border-collapse: collapse;
  border-radius: 15px;
  overflow: hidden;
`;

export const ResultsTHead = styled.thead`
  color: #fff;
  background-color: #39A7DF;
`;

export const ResultsTRH = styled.tr`
  height: 2.5rem;
`;

export const ResultsTH = styled.th`
  padding: 12px 15px;
  text-weight: bold;
`;

export const ResultsTR = styled.tr`
  height: 2.5rem;
  &:nth-child(even) {
    background-color: #000;
  }

  ${({ best_idx }) => ` &:nth-child(${best_idx}) {
    color: #39A7DF;
    }
  `}
`;

export const ResultsTBody = styled.tbody`
  border-spacing: 0 5px;
  &:nth-child(even) {
    background-color: #2B2A2A;
  }
  color: white;
`;

export const ResultsTD = styled.td`
  padding: 12px 15px;
  text-align: center;
`;