import styled from 'styled-components'

const InputSearchWrapper = styled.div`
    width: 85%;
    position: relative;
    padding-bottom: 10%;
    margin: 0 7.5%;

    img {
        position: absolute;
        top: 0;
        right: 0;
        padding: 3.5%;
    }

    input {
        box-sizing: border-box;
        width: 100%;
        padding: 5%;
        border: none;
        border-radius: 10px;

        &::placeholder {
            opacity: 0.38;
        }
    }
`

export { InputSearchWrapper }
