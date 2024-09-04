import { useForm, SubmitHandler } from "react-hook-form";
import { useContext, useState } from "react";
import { TransactionsContext } from "../../Context/transationsContext";
import Header from "../Header";
import {
  Button,
  InputAdornment,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import moment from "moment";
import * as S from "./TransactionForm.style";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArticleIcon from "@mui/icons-material/Article";
import { ITransaction } from "../../Context/transationsContext";

const TransactionForm = () => {
  const { register, handleSubmit } = useForm<ITransaction>();
  const { addTransaction } = useContext(TransactionsContext);
  const [isShowing, setIsShowing] = useState<boolean>(true);

  function ShowOrHideInputs(isShowing: boolean) {
    setIsShowing(isShowing);
  }

  const onSubmit: SubmitHandler<ITransaction> = (data) => {
    addTransaction(data);
  };

  return (
    <>
      <Header title="Registrador de Transações" />
      {/* Zerar produto apos retornar para a opcao de entrada */}
     <section>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

        <Container sx={{ margin: "1rem 0 1rem 1rem" }}>
          <FormLabel
          id="demo-row-radio-buttons-group-label"
          sx={{fontSize: "1.2rem",
            fontWeight: "bold",
            color: "black"
          }}>
            Tipo de Transacao
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="type"
          >
            <FormControlLabel
            {...register("type")}
              required
              name="type"
              value="entry"
              control={<Radio />}
              label="Entrada"
              onClick={() => ShowOrHideInputs(true)}
            />
            <FormControlLabel
            {...register("type")}
              required
              name="type"
              value="exit"
              control={<Radio />}
              label="Saida"
              onClick={() => ShowOrHideInputs(false)}
            />
          </RadioGroup>
        </Container>

        <Grid container spacing={2} maxWidth="75vw" margin="0 1rem">
          <Grid size={6} >
            <TextField
              fullWidth
              autoComplete="on"
              id="author"
              label="Autor da Transacao"
              variant="outlined"
              {...register("author")}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>
          <Grid size={6} hidden={isShowing}>
            <TextField
              fullWidth
              id="product"
              label="Produto"
              variant="outlined"
              {...register("product")}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <ShoppingBagIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>

          <Grid size={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Valor"
              id="transactioValue"
              {...register("transactionValue")}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Descricao(Opcional)"
              id="description"
              {...register("description")}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <ArticleIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>
        </Grid>

        <Container hidden>
          <TextField
          {...register("date")}
          id="date"
          value={moment(Date()).format("DD/MM/YYYY")} />
        </Container>

        <section style={S.ButtonContainer}>
          <Button variant="contained" type="submit" >
            Registrar Transacao
          </Button>
          <Link to="/list">
            <Button variant="contained" sx={{ marginLeft: "1rem" }}>
              Ver Transacoes
            </Button>
          </Link>
        </section>
      </form>
     </section> 
    </>
  );
};

export default TransactionForm;
