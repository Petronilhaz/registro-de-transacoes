import * as S from "./Header.style"
interface HeaderInterface  {
    title: string
}

const Header = ({title}: HeaderInterface) => {
    return(
        <>
        <S.Container>
            <S.Title>{title}</S.Title>
        </S.Container>
        </>
    )
}

export default Header;