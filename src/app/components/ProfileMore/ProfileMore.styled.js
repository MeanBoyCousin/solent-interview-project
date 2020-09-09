import styled from 'styled-components'

const ProfileWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    color: #565656;
    background-color: #ededed;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .profile {
        background: white;
        border-radius: 100%;
        border: 1px solid #565656;
        padding: 2.5%;
        margin-bottom: 2.5%;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        font-size: 2rem;
    }

    .icon {
        margin-top: 10%;
        margin-bottom: 2.5%;
    }

    button {
        margin-top: 10%;
        padding: 2.5%;
        font-size: 1.5rem;
        border-radius: 10px;
        border: 1px solid #565656;
    }

    @media (min-width: 1024px) {
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

        .icon {
            margin: 0;
        }

        button {
            margin-top: 5%;
        }
    }
`

export { ProfileWrapper }
