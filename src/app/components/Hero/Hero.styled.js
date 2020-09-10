import styled from 'styled-components'

const HeroWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Set black background as fall back if image fails to load. */
    background-color: black;
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

    @media (min-width: 768px) {
        text-align: left;

        h1 {
            font-size: 3.25rem;
        }

        p {
            font-size: 1.25rem;
        }
    }

    @media (min-width: 992px) {
        text-align: left;

        h1,
        p {
            width: 50%;
        }

        h1 {
            font-size: 4rem;
            padding: 15% 5% 2.5% 5%;
        }

        p {
            font-size: 1.5rem;
            padding-bottom: 5%;
        }
    }
`

export { HeroWrapper }
