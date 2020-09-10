import React, { useState, useEffect } from 'react'

import { Hero } from 'Components/Hero/Hero'
import { ProfileBasic } from 'Components/ProfileBasic/ProfileBasic'
import { ProfileMore } from 'Components/ProfileMore/ProfileMore'

import { NoResults, ProfileBasicWrapper } from './Homepage.styled'

const Homepage = () => {
    const [profiles, setProfiles] = useState([
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
    ])

    useEffect(() => {
        const getProfiles = async amount => {
            const res = await fetch(
                `https://randomuser.me/api/?results=${amount}`
            )
            const data = await res.json()
            setProfiles(data.results)
        }

        getProfiles(10)
    }, [])

    const [query, setQuery] = useState('')

    // prettier-ignore
    const filteredProfiles = profiles.every(profile => profile === undefined)
        ? profiles
        : profiles.filter(profile => {
            const fullName = `${profile.name.first} ${profile.name.last}`
            return fullName.toLowerCase().includes(query)
        })

    const [modal, setModal] = useState({
        visible: false,
        uuid: undefined
    })

    return (
        <>
            <Hero setQuery={setQuery} />
            <div style={{ position: 'relative' }}>
                {!modal.visible && (
                    <ProfileBasicWrapper>
                        {filteredProfiles.map((profile, index) => {
                            return profile ? (
                                <ProfileBasic
                                    key={`profile-${index}`}
                                    picture={profile.picture.thumbnail}
                                    name={`${profile.name.first} ${profile.name.last}`}
                                    uuid={profile.login.uuid}
                                    setModal={setModal}
                                />
                            ) : (
                                <ProfileBasic key={`profile-${index}`} />
                            )
                        })}
                        {filteredProfiles.length === 0 && (
                            <NoResults>No results found.</NoResults>
                        )}
                    </ProfileBasicWrapper>
                )}
                {modal.visible && (
                    <ProfileMore
                        profile={
                            profiles.filter(
                                profile => profile.login.uuid === modal.uuid
                            )[0]
                        }
                        setModal={setModal}
                    />
                )}
            </div>
        </>
    )
}

export { Homepage }
