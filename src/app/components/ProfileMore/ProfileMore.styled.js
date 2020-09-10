import styled from 'styled-components'

const ProfileWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    color: ${props => props.theme['dark-grey']};
    background-color: ${props => props.theme['light-grey']};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .profile {
        height: 128px;
        width: 128px;
        background: white;
        border-radius: 100%;
        border: ${props => `1px solid ${props.theme['dark-grey']}`};
        padding: 2.5%;
        margin-bottom: 2.5%;
        box-shadow: ${props => props.theme['shadow-sm']};
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        font-size: 2rem;
    }

    span {
        margin-top: 10%;

        p {
            margin-top: 0.75rem;
            font-weight: 600;
        }
    }

    button {
        margin-top: 10%;
        padding: 2.5%;
        font-size: 1.5rem;
        border-radius: 10px;
        border: ${props => `1px solid ${props.theme['dark-grey']}`};
        box-shadow: ${props => props.theme['shadow-sm']};
        cursor: pointer;
    }

    @media (min-width: 992px) {
        position: absolute;
        height: auto;
        padding: 5% 0;

        .profile {
            padding: 1.25%;
        }

        div {
            width: 60%;
            flex-direction: row;
            justify-content: space-evenly;
        }

        h2 {
            padding-bottom: 5%;
        }

        span {
            margin-top: 0;
            display: flex;
            align-items: center;

            .icon {
                transform: scale(0.7);
            }

            p {
                margin-top: 0;
                padding-left: 0.5rem;
            }
        }

        button {
            margin-top: 5%;
        }
    }
`

export { ProfileWrapper }
