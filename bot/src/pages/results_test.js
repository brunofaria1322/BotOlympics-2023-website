import React, { useState } from "react";

import resultsDataBasico from "../components/ResultsSection/results_basico_correct.json";
import resultsDataSecundario from "../components/ResultsSection/results_secundario_correct.json"
import resultsDataSuperior from "../components/ResultsSection/results_superior_correct.json"

import { useTable } from "react-table";

import {
  ResultsContainer,
  ResultsH1,
  ResultsH2,
  ResultsP,
  ResultsWrapper,
  ResultsCategotyWrapper,
  ResultsCategoryButton,
  ResultsTableWrapper,
  ResultsTable,
  ResultsTHead,
  ResultsTRH,
  ResultsTR,
  ResultsTH,
  ResultsTBody,
  ResultsTD,
} from "../components/ResultsSection/ResultsElements";






const ResultsPageOther = () => {
 
  window.scrollTo(0, 0);
  const data_basico = React.useMemo(() => resultsDataBasico, []);
  const data_secundario = React.useMemo(() => resultsDataSecundario, []);
  const data_superior = React.useMemo(() => resultsDataSuperior, []);

  // sort function
  const sortFc = (a, b) => {
    if (a.total === "-") {
      return 1;
    }
    else if (b.total === "-") {
      return -1;
    }
    else {
      return a.total - b.total;
    }
  }

  const sortFc2 = (a, b) => {
    if (a.total === "-") {
      return 1;
    }
    else if (b.total === "-") {
      return -1;
    }
    else {
      return b.total - a.total;
    }
  }

  //add total score
  for (let i = 0; i < data_basico.length; i++) {
    data_basico[i].penalty1 = data_basico[i].zone1 * 150 + data_basico[i].out1 * 10;
    data_basico[i].penalty2 = data_basico[i].zone2 * 150 + data_basico[i].out2 * 10;
    if (data_basico[i].score1 == null || data_basico[i].score1 === "-") {
      data_basico[i].score1 = data_basico[i].penalty1 = data_basico[i].score2 = data_basico[i].penalty2 = data_basico[i].total = "-";
    }
    else if (data_basico[i].score2 == null || data_basico[i].score2 === "-") {
      data_basico[i].total = data_basico[i].score1 + data_basico[i].penalty1;
      
      // round to 2 decimal places
      data_basico[i].total = Math.round(data_basico[i].total * 100) / 100;
      data_basico[i].score2 = data_basico[i].penalty2 = "-";
    }
    else {
      data_basico[i].total = data_basico[i].score1 + data_basico[i].penalty1 + data_basico[i].score2 + data_basico[i].penalty2;
        
      // round to 2 decimal places
      data_basico[i].total = Math.round(data_basico[i].total * 100) / 100;
    }
  }
  data_basico.sort(sortFc);

  for (let i = 0; i < data_secundario.length; i++) {
    data_secundario[i].penalty1 = data_secundario[i].zone1 * 150 + data_secundario[i].out1 * 10 + data_secundario[i].touch1 + data_secundario[i].wall1 + data_secundario[i].obstacle1 + data_secundario[i].drag1 * 50;
    data_secundario[i].penalty2 = data_secundario[i].zone2 * 150 + data_secundario[i].out2 * 10 + data_secundario[i].touch2 + data_secundario[i].wall2 + data_secundario[i].obstacle2 + data_secundario[i].drag2 * 50;
    if (data_secundario[i].score1 == null || data_secundario[i].score1 === "-") {
      data_secundario[i].score1 = data_secundario[i].penalty1 = data_secundario[i].score2 = data_secundario[i].penalty2 = data_secundario[i].total = "-";
    }
    else if (data_secundario[i].score2 == null || data_secundario[i].score2 === "-") {
      // data_secundario[i].total = data_secundario[i].score1 + data_secundario[i].penalty1;
      data_secundario[i].total = data_secundario[i].score2 = data_secundario[i].penalty2 = "-";
      
      // data_secundario[i].total = Math.round(data_secundario[i].total * 100) / 100;
    }
    else {
      data_secundario[i].total = data_secundario[i].score1 + data_secundario[i].penalty1 + data_secundario[i].score2 + data_secundario[i].penalty2;
      data_secundario[i].total = Math.round(data_secundario[i].total * 100) / 100;
    }
  }
  data_secundario.sort(sortFc);

  for (let i = 0; i < data_superior.length; i++) {
    data_superior[i].penalty1 = -(data_superior[i].lamp1 * 20 + data_superior[i].touch1 + data_superior[i].wall1 + data_superior[i].obstacle1 + data_superior[i].drag1 * 10);
    const vp1 = 300 - data_superior[i].time1;
    data_superior[i].score1 = (vp1 + data_superior[i].fire1 * 100) * (1 + data_superior[i].mo1);
    data_superior[i].score1 = Math.round(data_superior[i].score1 * 100) / 100;

    data_superior[i].penalty2 = -(data_superior[i].lamp2 * 20 + data_superior[i].touch2 + data_superior[i].wall2 + data_superior[i].obstacle2 + data_superior[i].drag2 * 10);
    const vp2 = 300 - data_superior[i].time2;
    data_superior[i].score2 = (vp2 + data_superior[i].fire2 * 100) * (1 + data_superior[i].mo2);
    data_superior[i].score2 = Math.round(data_superior[i].score2 * 100) / 100;


    data_superior[i].penalty3 = -(data_superior[i].lamp3 * 20 + data_superior[i].touch3 + data_superior[i].wall3 + data_superior[i].obstacle3 + data_superior[i].drag3 * 10);
    const vp3 = 300 - data_superior[i].time3;
    data_superior[i].score3 = (vp3 + data_superior[i].fire3 * 100) * (1 + data_superior[i].mo3);
    data_superior[i].score3 = Math.round(data_superior[i].score3 * 100) / 100;


    if (data_superior[i].time1 == null) {
      data_superior[i].score1 = data_superior[i].penalty1 = data_superior[i].score2 = data_superior[i].penalty2 = data_superior[i].score3 = data_superior[i].penalty3 = data_superior[i].total = "-";
    }
    else if (data_superior[i].time2 == null) {
      data_superior[i].total = data_superior[i].score1 + data_superior[i].penalty1;
      data_superior[i].score2 = data_superior[i].penalty2 = data_superior[i].score3 = data_superior[i].penalty3 = "-";

      data_superior[i].total = Math.round(data_superior[i].total * 100) / 100;
    }
    else if (data_superior[i].time3 == null) {
      data_superior[i].total = data_superior[i].score1 + data_superior[i].penalty1 + data_superior[i].score2 + data_superior[i].penalty2;
      data_superior[i].score3 = data_superior[i].penalty3 = "-";

      data_superior[i].total = Math.round(data_superior[i].total * 100) / 100;
    }
    else {
      data_superior[i].total = data_superior[i].score1 + data_superior[i].penalty1 + data_superior[i].score2 + data_superior[i].penalty2 + data_superior[i].score3 + data_superior[i].penalty3;
      data_superior[i].total = Math.round(data_superior[i].total * 100) / 100;
    }
    //data_superior[i].total = data_superior[i].total.toFixed(2);
  }
  data_superior.sort(sortFc2);

  const columns2 = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "1ª Manga",
        columns: [
          {
            Header: "Pontuação",
            accessor: "score1",
          },
          {
            Header: "Penalização",
            accessor: "penalty1",
          },
        ]
      },
      {
        Header: "2ª Manga",
        columns: [
          {
            Header: "Pontuação",
            accessor: "score2",
          },
          {
            Header: "Penalização",
            accessor: "penalty2",
          },
        ]
      },
      {
        Header: "Total",
        accessor: "total",
      }
    ], []
  );

  const columns3 = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "1ª Manga",
        columns: [
          {
            Header: "Pontuação",
            accessor: "score1",
          },
          {
            Header: "Penalização",
            accessor: "penalty1",
          },
        ]
      },
      {
        Header: "2ª Manga",
        columns: [
          {
            Header: "Pontuação",
            accessor: "score2",
          },
          {
            Header: "Penalização",
            accessor: "penalty2",
          },
        ]
      },
      {
        Header: "3ª Manga",
        columns: [
          {
            Header: "Pontuação",
            accessor: "score3",
          },
          {
            Header: "Penalização",
            accessor: "penalty3",
          },
        ]
      },
      {
        Header: "Total",
        accessor: "total",
      }
    ], []
  );

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(data_basico);
  const [columns, setColumns] = useState(columns2);
  const [category, setCategory] = useState("ISR");

  const changeCategory = (value) => {
    const new_value = (counter + value +3)%3;
    setCounter(new_value);

    if (new_value === 0) {
      setData(data_basico);
      setColumns(columns2);
      setCategory("ISR");
    } else if (new_value === 1) {
      setData(data_secundario);
      setColumns(columns2);
      setCategory("Bot'n Roll");
    } else {
      setData(data_superior);
      setColumns(columns3);
      setCategory("FCTUC");
    }

  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns:columns, data:data });


  

  return (
    <ResultsContainer id='results'>
      <ResultsWrapper>
        <ResultsCategotyWrapper>
          <ResultsCategoryButton isLeft = {true} onClick={() => changeCategory(-1)}> &lt; </ResultsCategoryButton>
          <ResultsH1>{category}</ResultsH1>
          <ResultsCategoryButton isLeft = {false} onClick={() => changeCategory(1)}> &gt; </ResultsCategoryButton>
        </ResultsCategotyWrapper>
        <ResultsTableWrapper>
          <ResultsTable {...getTableProps()}>
            <ResultsTHead>
              {headerGroups.map((headerGroup) => (
                <ResultsTRH {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <ResultsTH {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </ResultsTH>
                  ))}
                </ResultsTRH>
              ))}
            </ResultsTHead>
            <ResultsTBody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <ResultsTR {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <ResultsTD {...cell.getCellProps()}> {cell.render("Cell")} </ResultsTD>
                    ))}
                  </ResultsTR>
                );
              })}
            </ResultsTBody>
          </ResultsTable>
        </ResultsTableWrapper>
      </ResultsWrapper>
    </ResultsContainer>
  );
};

export default ResultsPageOther;
