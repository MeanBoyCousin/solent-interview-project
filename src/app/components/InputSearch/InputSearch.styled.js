import styled from 'styled-components'

const InputSearchWrapper = styled.div`
    width: 85%;
    position: relative;
    margin-bottom: 10%;

    img {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        transform: scale(0.7);
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

    @media (min-width: 1024px) {
        width: 50%;
        position: relative;
        margin-bottom: 5%;

        img {
            transform: scale(0.5);
        }

        input {
            font-size: 1.5rem;
            padding: 2.5%;
        }
    }
`

export { InputSearchWrapper }
