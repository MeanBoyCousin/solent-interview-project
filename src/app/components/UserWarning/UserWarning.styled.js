import styled from 'styled-components'
import { motion } from 'framer-motion'

const UserWarningWrapper = styled(motion.div)`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 5%;
    box-sizing: border-box;
    background: ${props => props.theme['dark-grey']};
    color: white;
    text-align: center;
    font-weight: 600;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export { UserWarningWrapper }
