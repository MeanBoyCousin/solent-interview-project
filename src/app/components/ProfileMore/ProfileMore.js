import React from 'react'
import dayjs from 'dayjs'

import { ProfileWrapper } from './ProfileMore.styled'

const ProfileMore = ({
    profile: { cell, dob, email, name, picture },
    setModal
}) => {
    console.log(dob)
    return (
        <ProfileWrapper>
            <img
                className="profile"
                src={picture.large}
                alt="The profile picture for the member of staff you selected"
            />
            <h2>{`${name.first} ${name.last}`}</h2>
            <div>
                <img
                    className="icon"
                    src="/static/icons/email.svg"
                    alt="An icon of an envelope to symbolise a users email address"
                />
                <p>{email}</p>
                <img
                    className="icon"
                    src="/static/icons/dob.svg"
                    alt="An icon of a crown to symbolise a users date of birth"
                />
                <p>{dayjs(dob.date).format('D/M/YYYY')}</p>
                <img
                    className="icon"
                    src="/static/icons/phone.svg"
                    alt="An icon of a phone to symbolise a users phone number"
                />
                <p>{cell}</p>
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

export { ProfileMore }
