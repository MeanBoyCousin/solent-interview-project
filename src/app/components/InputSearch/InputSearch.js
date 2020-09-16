import React from 'react'
import debounce from 'lodash.debounce'

import { InputSearchWrapper } from './InputSearch.styled'

const InputSearch = ({ setQuery }) => {
    const debounceSetQuery = debounce(e => {
        setQuery(e.target.value.toLowerCase())
    }, 300)

    return (
        <InputSearchWrapper>
            <img
                src={`${process.env.ICONS}search.svg`}
                alt="A search icon indicating that this input box is for searching the page content"
            />
            <input
                type="text"
                placeholder="Start typing..."
                aria-label="Search"
                onKeyUp={e => {
                    e.persist()
                    debounceSetQuery(e)
                }}
            />
        </InputSearchWrapper>
    )
}

export { InputSearch }
