import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProfileWrapper = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;
    width: 85%;
    margin: 2.5% 0;
    background: white;
    border: 1px solid black;
    box-shadow: ${props => props.theme['shadow-sm']};
    cursor: pointer;
    transition: ${props => props.theme['ease-100']};

    &:hover {
        box-shadow: ${props => props.theme['shadow-md']};
    }

    &:active {
        box-shadow: ${props => props.theme['shadow-lg']};
    }

    .thumbnail {
        width: 48px;
        height: 48px;
        border-radius: 100%;
        border: 1px solid black;
        box-shadow: ${props => props.theme['shadow-sm']};
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
        background: ${props => props.theme['dark-grey']};
        animation: ${props => props.theme.pulse};
    }

    .skeleton-thumbnail {
        width: 48px;
        height: 48px;
    }

    .skeleton-name {
        width: 50%;
        height: 12px;
    }

    @media (min-width: 768px) {
        p {
            font-size: 0.9rem;
        }

        .arrow {
            transform: scale(0.6);
        }
    }

    @media (min-width: 992px) {
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
