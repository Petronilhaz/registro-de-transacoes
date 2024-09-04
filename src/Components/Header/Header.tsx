import { Container, Typography } from "@mui/material";
import * as S from "./Header.style";
interface HeaderInterface {
  title: string;
}

const Header = ({ title }: HeaderInterface) => {
  return (
    <>
      <Container sx={S.Container}>
        <Typography component='h1' variant='h4' sx={{fontWeight: "bold"}}>{title}</Typography>
      </Container>
    </>
  );
};

export default Header;
