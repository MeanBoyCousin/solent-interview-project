import React from 'react'
import 'dotenv/config'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

import { Hero } from './Hero'

afterEach(cleanup)

describe('Hero component', () => {
    test('should render with correct elements', () => {
        const { asFragment } = render(<Hero />)
        expect(asFragment()).toMatchSnapshot()
    })
})
