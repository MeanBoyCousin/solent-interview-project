import React from 'react'

import { mediumXInOut } from 'Motion/variants'
import { ProfileWrapper } from './ProfileBasic.styled'

const ProfileBasic = ({ picture, name, uuid, setModal }) => {
    return (
        <ProfileWrapper
            variants={mediumXInOut}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => {
                setModal({ visible: true, uuid: uuid })
            }}
        >
            {picture && name ? (
                <>
                    <img
                        className="thumbnail"
                        src={picture}
                        alt={`The profile picture for ${name}`}
                    />
                    <p>{name}</p>
                    <img
                        className="arrow"
                        src="/static/icons/circle-arrow.svg"
                        alt="An arrow pointing right enclosed inside a circle"
                    />
                </>
            ) : (
                <>
                    <div className="thumbnail skeleton skeleton-thumbnail"></div>
                    <div className="skeleton skeleton-name"></div>
                </>
            )}
        </ProfileWrapper>
    )
}

export { ProfileBasic }
