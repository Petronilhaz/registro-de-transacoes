import { useContext, useEffect } from "react";
import { TransactionsContext } from "../../../Context/transationsContext";
import { Link } from "react-router-dom";
import * as S from "./Table.style";
import { ITransaction } from "../../../Context/transationsContext"
const Table = () => {
  const { transactions, setTransactions } = useContext(TransactionsContext);

function renderRow(rowProp: keyof ITransaction) {
  return(
    <>
      {
      transactions.length !== 0 ? transactions.map((transaction, index) => {
//          const { author, transactionValue, description, product } = transaction
        return(
          <>
          <S.DataContainer>
                <S.TableRow key={index}>                  
                  {
                  transaction[rowProp] !== ("") &&
                  transaction[rowProp] !== (0) &&
                  transaction[rowProp] !== (transaction["transactionValue"]) ?
                  transaction[rowProp] :
                  "\u00A0"
                  }
                  {
                  transaction[rowProp] === (transaction["transactionValue"]) ?
                  Number(transaction["transactionValue"]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : null
                  }
                </S.TableRow>
              </S.DataContainer>
          </>
        )
      }): null
      } 
    </>
  )
}



  return (
    <>
      <S.TableContainer>
        <S.TableHeader>
          <S.HeaderContainer>
            <S.Header>Autor da Transação</S.Header>           
            {renderRow("author")}
          </S.HeaderContainer>

          <S.HeaderContainer>
            <S.Header>Produto</S.Header>
            {renderRow("product")}
          </S.HeaderContainer>
          <S.HeaderContainer>
            <S.Header>Descrição</S.Header>
            {renderRow("description")}
          </S.HeaderContainer>
          <S.HeaderContainer>
            <S.Header>Data</S.Header>
            {renderRow("date")}
          </S.HeaderContainer>
          <S.HeaderContainer>
            <S.Header>Valor</S.Header>
            {renderRow("transactionValue")}
          </S.HeaderContainer>
        </S.TableHeader>
      </S.TableContainer>
      <S.ButtonContainer>
            <Link to="/">
              <S.Button type="button">Registrar Transação</S.Button>
            </Link>
          </S.ButtonContainer>
    </>
  );
};

export default Table;
