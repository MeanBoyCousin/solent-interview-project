import React from 'react'
import dayjs from 'dayjs'

import { largeYInOut } from 'Motion/variants'
import { ProfileWrapper } from './ProfileDetails.styled'

const ProfileDetails = ({
    profile: { cell, dob, email, name, picture },
    setModal
}) => {
    return (
        <ProfileWrapper
            variants={largeYInOut}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <img
                className="profile"
                src={picture.large}
                alt="The profile picture for the member of staff you selected"
            />
            <h2>{`${name.first} ${name.last}`}</h2>
            <div>
                <span>
                    <img
                        className="icon"
                        src={`${process.env.ICONS}email.svg`}
                        alt="An icon of an envelope to symbolise a users email address"
                    />
                    <p>{email}</p>
                </span>
                <span>
                    <img
                        className="icon"
                        src={`${process.env.ICONS}dob.svg`}
                        alt="An icon of a crown to symbolise a users date of birth"
                    />
                    <p>{dayjs(dob.date).format('D/M/YYYY')}</p>
                </span>
                <span>
                    <img
                        className="icon"
                        src={`${process.env.ICONS}phone.svg`}
                        alt="An icon of a phone to symbolise a users phone number"
                    />
                    <p>{cell}</p>
                </span>
            </div>
            <button
                onClick={() => {
                    setModal({ visible: false, uuid: undefined })
                }}
            >
                Close
            </button>
        </ProfileWrapper>
    )
}

export { ProfileDetails }
