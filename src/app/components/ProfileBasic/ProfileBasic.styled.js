import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
    0%, 100% {
        opacity: 0.76;
    }
    50% {
        opacity: 0.38;
    }
`

const ProfileWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 85%;
    margin: 2.5% 0;
    background: white;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;

    .thumbnail {
        border-radius: 100%;
        border: 1px solid black;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        margin: 2.5%;
    }

    p {
        font-size: 0.8rem;
        font-weight: 600;
    }

    .arrow {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        transform: scale(0.7);
    }

    .skeleton {
        background: grey;
        animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .skeleton-thumbnail {
        width: 48px;
        height: 48px;
    }

    .skeleton-name {
        width: 50%;
        height: 12px;
    }

    @media (min-width: 1024px) {
        width: 50%;
        margin: 2.5% 0 0 0;

        &:last-child {
            margin: 2.5% 0;
        }

        p {
            font-size: 1rem;
        }

        .arrow {
            transform: scale(0.5);
        }
    }
`

export { ProfileWrapper }
