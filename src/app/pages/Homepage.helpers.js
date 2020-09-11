// prettier-ignore
const filterProfiles = (profiles, query) => {
    return profiles.every(profile => profile === null)
        ? profiles
        : profiles.filter(profile => {
            const fullName = `${profile.name.first} ${profile.name.last}`
            return fullName.toLowerCase().includes(query)
        })
}

export { filterProfiles }
