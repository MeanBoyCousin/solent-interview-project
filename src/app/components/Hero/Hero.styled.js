import styled from 'styled-components'

const HeroWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('/static/images/background.jpg');
    background-position: 35% 0%;
    background-size: cover;
    color: white;
    text-align: center;

    h1 {
        font-size: 2.5rem;
        padding: 15% 5% 10% 5%;
    }

    p {
        padding-bottom: 10%;
    }

    @media (min-width: 1024px) {
        text-align: left;

        h1 {
            width: 50%;
            font-size: 4rem;
            padding: 15% 5% 2.5% 5%;
        }

        p {
            width: 50%;
            font-size: 1.5rem;
            padding-bottom: 5%;
        }
    }
`

export { HeroWrapper }
