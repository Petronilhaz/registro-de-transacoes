import styled from "styled-components";

export const TypeInputContainer = styled.div`
    display: flex;
    padding: 10px 0;
    margin: 0px 0 30px 0;
    background-color: #E6E6E6;
`
export const FormContainer = styled.div`

`

export const TypeParagraph = styled.p`
    margin: 0px 10px;
    font-weight: bold;
`
export const EntryLabel = styled.label`
    display: flex;
    align-items: center;
    margin-right: 15px;
    font-size: 12px;
    font-weight: 600;
`
export const ExitLabel = styled(EntryLabel)`
    margin-right: 0;
`

export const TableRow = styled.div`
    display: flex;    
`
export const RadioSelector = styled.input`
    margin-left: 5px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 40px;
`

export const Label = styled.label`
    font-size: 12px;
    font-weight: bold;
`
export const Input = styled.input`
    padding: 7px 10px;
    border: 2px solid lightgray;
    border-radius: 10px;
    ::placeholder {
        font-size: 12px;
    }
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