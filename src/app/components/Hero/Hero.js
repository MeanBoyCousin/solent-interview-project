import React from 'react'

import { HeroWrapper } from './Hero.styled'
import { InputSearch } from '../InputSearch/InputSearch'

const Hero = ({ setQuery }) => {
    return (
        <HeroWrapper>
            <h1>Find a member of staff</h1>
            <p>Use the search box to get started</p>
            <InputSearch setQuery={setQuery} />
        </HeroWrapper>
    )
}

export { Hero }
