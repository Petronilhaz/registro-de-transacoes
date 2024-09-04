import { useContext } from "react";
import { TransactionsContext } from "../../../Context/transationsContext";
import { Link } from "react-router-dom";
import * as S from "./Table.style";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
const Table = () => {
  const { transactions } = useContext(TransactionsContext);

  function renderType(typeValue: string) {
    if (typeValue === "entry") {
      return (
        <Typography sx={{ color: "#2b8211", fontWeight: "bold" }}>
          Entrada
        </Typography>
      );
    } else if (typeValue === "exit") {
      return (
        <Typography sx={{ color: "#901313", fontWeight: "bold" }}>
          Saída
        </Typography>
      );
    }
  }

  function renderMoney(moneyValue: Number) {
    return (
      <Typography>
        {Number(moneyValue).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
    );
  }

  function renderTopic(topic: string, paragraph: string | undefined) {
    return (   
        <Typography>
          {topic + ": "}
          {paragraph === undefined || paragraph === "" ? " Não definido" : paragraph}
        </Typography>
    );
  }

  return (
    <>
      {transactions.length !== 0
        ? transactions.map((transaction, index) => {
            const {
              type,
              author,
              product,
              transactionValue,
              description,
              date,
            } = transaction;
            return (
              <>
                <Container key={index} sx={S.TableContainer}>
                  <Accordion sx={S.AccordionBar}>
                    <AccordionSummary
                      expandIcon={<ArrowDropDownCircleOutlined />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      sx={S.AccordionDetails}
                    >
                      <Grid container spacing={2} sx={{ width: "100%" }}>
                        <Grid size={1.5}>{renderType(type)}</Grid>
                        <Grid size={6}>
                          <Typography>{author}</Typography>
                        </Grid>
                        <Grid size={2}>{renderMoney(transactionValue)}</Grid>
                        <Grid size={2}>
                          <Typography>{date}</Typography>
                        </Grid>
                      </Grid>
                    </AccordionSummary>

                    <AccordionDetails sx={{ backgroundColor: "#8cbce1" }}>
                      <Grid container>
                        <Grid size={12}>{renderTopic("Produto", product)}</Grid>
                        <Grid size={12}>
                          {renderTopic("Descricao", description)}
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Container>
              </>
            );
          })
        : <Typography sx={{textAlign: "center"}}>Nao há transações registradas no momento...</Typography>}

      <section style={S.ButtonContainer}>
        <Link to="/">
          <Button variant="contained" type="submit">
            Registrar Transacao
          </Button>
        </Link>
      </section>
    </>
  );
};

export default Table;
