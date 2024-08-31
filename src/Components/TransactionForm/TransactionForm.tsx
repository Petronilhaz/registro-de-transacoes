import { useForm, SubmitHandler } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../Context/transationsContext";
import Header from "../Header";
import { Link } from "react-router-dom";
import moment from "moment";
import * as S from "./TransactionForm.style";
interface IForm {
  type: string;
  author: string;
  product: string;
  transactionValue: number;
  description: string;
  date: string;
}

const TransactionForm = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const { transactions, addTransaction } = useContext(TransactionsContext);
  const [isShowing, setIsShowing] = useState<boolean>(true);

  function ShowOrHideInputs(isShowing: boolean) {
    setIsShowing(isShowing);
  }

  const onSubmit: SubmitHandler<IForm> = (data) => {
    addTransaction(data);
  };

  //useEffect(() => console.log("Transactions: ", transactions, new Date().toLocaleDateString('pt-BR')), [transactions]);
  return (
    <>
      <Header title="Registrador de Transações" />

      <form onSubmit={handleSubmit(onSubmit)}>        
        <S.TypeInputContainer>
          <S.TypeParagraph>Tipo de Transação</S.TypeParagraph>
          <S.EntryLabel>
            Entrada
            <S.RadioSelector
              onClick={() => ShowOrHideInputs(true)}
              {...register("type")}
              type="radio"
              name="type"
              value="entry"
              required
            />
          </S.EntryLabel>
          <S.ExitLabel>
            Saída
            <S.RadioSelector
              onClick={() => ShowOrHideInputs(false)}
              {...register("type")}
              type="radio"
              name="type"
              value="exit"
              required
            />
          </S.ExitLabel>
        </S.TypeInputContainer>

        <S.TableRow>
          <S.InputContainer>
            <S.Label htmlFor="author">Nome</S.Label>
            <S.Input
              {...register("author")}
              id="author"
              placeholder="Autor da Transação"
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label hidden={isShowing} htmlFor="product">
              Produto
            </S.Label>
            <S.Input
              hidden={isShowing}
              {...register("product")}
              id="product"
              placeholder="Nome do Produto"
            />
          </S.InputContainer>
        </S.TableRow>
        <S.TableRow>
          <S.InputContainer>
            <S.Label htmlFor="price">Valor</S.Label>
            <S.Input
              {...register("transactionValue")}
              id="transactioValue"
              placeholder="Valor da Transação"
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label htmlFor="description">Descrição</S.Label>
            <S.Input
              {...register("description")}
              id="description"
              placeholder="(Opcional)"
            />
          </S.InputContainer>
        </S.TableRow>

        <S.Input
          hidden={true}
          {...register("date")}
          id="date"
          value={moment(Date()).format("DD/MM/YYYY")}
        ></S.Input>

        <S.ButtonContainer>
          <S.Button type="submit">Registrar Transação</S.Button>
          <Link to="/list">
            <S.Button type="button">Ver Lista</S.Button>
          </Link>
        </S.ButtonContainer>
      </form>
    </>
  );
};

export default TransactionForm;
