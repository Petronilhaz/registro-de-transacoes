import styled from "styled-components";

export const TableContainer = styled.div`
  width: 85vw;
  margin: auto;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto ;
  align-items: center;
  width: 100%;
  border: 1px solid black;
`;

export const HeaderContainer = styled.div`
  height: 100%;
  align-content: center;
  border: 1px solid black;
`

export const Header = styled.h3`
  text-align: center;
  justify-self: center;
  padding: 0.5rem 0;
`;

export const DataContainer = styled.div`
  &:first-of-type {
    border-top: 1px solid black;
  }
`

export const TableRow = styled.div`
  text-align: center;
  border-top: 1px solid black;
  padding: 0.2rem 0;
`

export const ButtonContainer = styled.div`
    margin-top: 10px;
`

export const Button = styled.button`
    padding: 7px;
    margin: 10px;
    font-size: 12px;
    font-weight: bold;
    border: 2px solid green;
    border-radius: 10px;
    background-color: #AFF4C6;
    &:hover {
        cursor: pointer;
        transform: scale(1.02);
        transition: 0.01s;
    };
`

// tratar como coluna, ColunmHeader, ColunmData
