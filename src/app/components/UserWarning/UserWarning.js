import React from 'react'

import { promptYInOut } from 'Motion/variants'
import { UserWarningWrapper } from './UserWarning.styled'

const UserWarning = () => {
    return (
        <UserWarningWrapper
            variants={promptYInOut}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <p>
                There was a problem fetching the staff profiles. Please refresh
                to try again.
            </p>
        </UserWarningWrapper>
    )
}

export { UserWarning }
