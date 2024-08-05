import { useContext } from "react";
import { TransactionsContext } from "../../../Context/transationsContext";
import { Link } from "react-router-dom";
import * as S from "./Table.style";

const Table = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      <S.TableContainer>
        <S.TableHeader>
          <S.HeaderContainer>
            <S.Header>Autor da Transação</S.Header>           
            {transactions.map((transactions, index) => (
              <S.DataContainer>
                <S.TableRow>{transactions.author}</S.TableRow>
              </S.DataContainer>
          ))}
          </S.HeaderContainer>

          <S.HeaderContainer>
            <S.Header>Produto</S.Header>
            {transactions.map((transactions, index) => (
              <S.DataContainer>
                <S.TableRow>{transactions.product}</S.TableRow>
              </S.DataContainer>
          ))}
          </S.HeaderContainer>
          <S.HeaderContainer>
            <S.Header>Descrição</S.Header>
            {transactions.map((transactions, index) => (
              <S.DataContainer>
                <S.TableRow>{transactions.description}</S.TableRow>
              </S.DataContainer>
          ))}
          </S.HeaderContainer>
          <S.HeaderContainer>
            <S.Header>Data</S.Header>
            {transactions.map((transactions, index) => (
              <S.DataContainer>
                <S.TableRow>{transactions.author}</S.TableRow>
              </S.DataContainer>
          ))}
          </S.HeaderContainer>
          <S.HeaderContainer>
            <S.Header>Valor</S.Header>
            {transactions.map((transactions, index) => (
              <S.DataContainer>
                <S.TableRow>{transactions.transactionValue}</S.TableRow>
              </S.DataContainer>
          ))}
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
