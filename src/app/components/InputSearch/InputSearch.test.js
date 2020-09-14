import React from 'react'
import 'dotenv/config'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

import { InputSearch } from './InputSearch'

afterEach(cleanup)

describe('InputSearch component', () => {
    test('should render input field of type text with search icon', () => {
        const { asFragment } = render(<InputSearch />)
        expect(asFragment()).toMatchSnapshot()
    })
})
