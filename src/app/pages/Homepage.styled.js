import styled from 'styled-components'

const NoResults = styled.p`
    width: 100%;
    text-align: center;
    opacity: ${props => props.theme.placeholder};
    font-size: 1.5rem;
    padding: 5% 0;
`

const ProfileBasicWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5%;
`

export { NoResults, ProfileBasicWrapper }
