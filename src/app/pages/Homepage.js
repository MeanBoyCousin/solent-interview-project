import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import { Hero } from 'Components/Hero/Hero'
import { ProfileBasic } from 'Components/ProfileBasic/ProfileBasic'
import { ProfileDetails } from 'Components/ProfileDetails/ProfileDetails'
import { UserWarning } from 'Components/UserWarning/UserWarning'

import {
    NoResults,
    ProfileBasicWrapper,
    ProfilesWrapper
} from './Homepage.styled'

import { filterProfiles } from './Homepage.helpers'

import { smallOpacity } from 'Motion/variants'

const Homepage = () => {
    // null values render as skeleton profiles
    const [profiles, setProfiles] = useState([
        null,
        null,
        null,
        null,
        null,
        null
    ])

    const [query, setQuery] = useState('')

    const [modal, setModal] = useState({
        visible: false,
        uuid: null
    })

    const [warningVisible, setWarningVisible] = useState(false)

    useEffect(() => {
        // Allows cancellation of async call if component un-mounts
        let ignore = false

        const getProfiles = async amount => {
            try {
                const res = await fetch(`${process.env.API}?results=${amount}`)
                const data = await res.json()
                // Sorted names by first name (a-z)
                data.results.sort((a, b) => {
                    return a.name.first.localeCompare(b.name.first)
                })
                if (!ignore) setProfiles(data.results)
            } catch (error) {
                setWarningVisible(true)
            }
        }

        getProfiles(10)
        return () => {
            ignore = true
        }
    }, [])

    const filteredProfiles = filterProfiles(profiles, query)

    return (
        <>
            <Hero setQuery={setQuery} />
            <ProfilesWrapper>
                {modal.visible === false && (
                    <ProfileBasicWrapper>
                        <AnimatePresence>
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
                        </AnimatePresence>
                        {filteredProfiles.length === 0 && (
                            <AnimatePresence>
                                <NoResults
                                    variants={smallOpacity}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    No results found.
                                </NoResults>
                            </AnimatePresence>
                        )}
                    </ProfileBasicWrapper>
                )}
                <AnimatePresence>
                    {modal.visible === true && (
                        <ProfileDetails
                            profile={
                                profiles.filter(
                                    profile => profile.login.uuid === modal.uuid
                                )[0]
                            }
                            setModal={setModal}
                        />
                    )}
                </AnimatePresence>
            </ProfilesWrapper>
            {warningVisible && <UserWarning />}
        </>
    )
}

export { Homepage }
