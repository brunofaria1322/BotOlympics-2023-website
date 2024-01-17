import React, { useState } from "react";

import resultsDataBasico from "../components/ResultsSection/results_basico.json";
import resultsDataSecundario from "../components/ResultsSection/results_secundario.json"
import resultsDataSuperior from "../components/ResultsSection/results_superior.json"

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






const ResultsPage = () => {
 
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

  //add total score
  for (let i = 0; i < data_basico.length; i++) {
    if (data_basico[i].score1 == null || data_basico[i].score1 === "-") {
      data_basico[i].score1 = data_basico[i].penalty1 = data_basico[i].score2 = data_basico[i].penalty2 = data_basico[i].total = "-";
    }
    else if (data_basico[i].score2 == null || data_basico[i].score2 === "-") {
      data_basico[i].total = data_basico[i].score1 + data_basico[i].penalty1;
      data_basico[i].score2 = data_basico[i].penalty2 = "-";
    }
    else {
      data_basico[i].total = data_basico[i].score1 + data_basico[i].penalty1 + data_basico[i].score2 + data_basico[i].penalty2;
    }
  }
  data_basico.sort(sortFc);

  for (let i = 0; i < data_secundario.length; i++) {
    if (data_secundario[i].score1 == null || data_secundario[i].score1 === "-") {
      data_secundario[i].score1 = data_secundario[i].penalty1 = data_secundario[i].score2 = data_secundario[i].penalty2 = data_secundario[i].total = "-";
    }
    else if (data_secundario[i].score2 == null || data_secundario[i].score2 === "-") {
      data_secundario[i].total = data_secundario[i].score1 + data_secundario[i].penalty1;
      data_secundario[i].score2 = data_secundario[i].penalty2 = "-";
    }
    else {
      data_secundario[i].total = data_secundario[i].score1 + data_secundario[i].penalty1 + data_secundario[i].score2 + data_secundario[i].penalty2;
    }
  }
  data_secundario.sort(sortFc);

  for (let i = 0; i < data_superior.length; i++) {
    if (data_superior[i].score1 == null || data_superior[i].score1 === "-") {
      data_superior[i].score1 = data_superior[i].penalty1 = data_superior[i].score2 = data_superior[i].penalty2 = data_superior[i].score3 = data_superior[i].penalty3 = data_superior[i].total = "-";
    }
    else if (data_superior[i].score2 == null || data_superior[i].score2 === "-") {
      data_superior[i].total = data_superior[i].score1 + data_superior[i].penalty1;
      data_superior[i].score2 = data_superior[i].penalty2 = data_superior[i].score3 = data_superior[i].penalty3 = "-";
    }
    else if (data_superior[i].score3 == null || data_superior[i].score3 === "-") {
      data_superior[i].total = data_superior[i].score1 + data_superior[i].penalty1 + data_superior[i].score2 + data_superior[i].penalty2;
    }
    else {
      data_superior[i].total = data_superior[i].score1 + data_superior[i].penalty1 + data_superior[i].score2 + data_superior[i].penalty2 + data_superior[i].score3 + data_superior[i].penalty3;
    }
  }
  data_superior.sort(sortFc);

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


  //let { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns:columns2, data:data_basico });
  const {
    getTableProps: getTableProps1,
    getTableBodyProps: getTableBodyProps1,
    headerGroups: headerGroups1,
    rows: rows1,
    prepareRow: prepareRow1
  }  = useTable({ columns:columns2, data:data_basico });

  
  //let { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns:columns2, data:data_secundario });
  const {
    getTableProps: getTableProps2,
    getTableBodyProps: getTableBodyProps2,
    headerGroups: headerGroups2,
    rows: rows2,
    prepareRow: prepareRow2
  }  = useTable({ columns:columns2, data:data_basico });
  

  //let { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns:columns3, data:data_superior });
  const {
    getTableProps: getTableProps3,
    getTableBodyProps: getTableBodyProps3,
    headerGroups: headerGroups3,
    rows: rows3,
    prepareRow: prepareRow3
  }  = useTable({ columns:columns3, data:data_basico });



  

  return (
    <ResultsContainer id='results'>
      <ResultsH1>Resultados</ResultsH1>
      <ResultsWrapper>
        <ResultsCategotyWrapper>
          <ResultsH2>ISR</ResultsH2>
        </ResultsCategotyWrapper>
        <ResultsTableWrapper>
          <ResultsTable {...getTableProps1()}>
            <ResultsTHead>
              {headerGroups1.map((headerGroup) => (
                <ResultsTRH {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <ResultsTH {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </ResultsTH>
                  ))}
                </ResultsTRH>
              ))}
            </ResultsTHead>
            <ResultsTBody {...getTableBodyProps1()}>
              {rows1.map((row) => {
                prepareRow1(row);
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

        <ResultsCategotyWrapper>
          <ResultsH2>Bot'n Roll</ResultsH2>
        </ResultsCategotyWrapper>
        <ResultsTableWrapper>
          <ResultsTable {...getTableProps2()}>
            <ResultsTHead>
              {headerGroups2.map((headerGroup) => (
                <ResultsTRH {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <ResultsTH {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </ResultsTH>
                  ))}
                </ResultsTRH>
              ))}
            </ResultsTHead>
            <ResultsTBody {...getTableBodyProps2()}>
              {rows2.map((row) => {
                prepareRow2(row);
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

        <ResultsCategotyWrapper>
          <ResultsH2>FCTUC</ResultsH2>
        </ResultsCategotyWrapper>
        <ResultsTableWrapper>
          <ResultsTable {...getTableProps3()}>
            <ResultsTHead>
              {headerGroups3.map((headerGroup) => (
                <ResultsTRH {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <ResultsTH {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </ResultsTH>
                  ))}
                </ResultsTRH>
              ))}
            </ResultsTHead>
            <ResultsTBody {...getTableBodyProps3()}>
              {rows3.map((row) => {
                prepareRow3(row);
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

export default ResultsPage;
