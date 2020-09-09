import styled from 'styled-components'

const HeroWrapper = styled.div`
    width: 100%;
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
`

export { HeroWrapper }
