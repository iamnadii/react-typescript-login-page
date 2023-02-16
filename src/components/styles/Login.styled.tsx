import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px
`

export const Input = styled.input`
    padding: 1rem;
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 5px;
    &::placeholder {
        color: #fff;
    }
`