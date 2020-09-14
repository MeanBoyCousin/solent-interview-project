import React from 'react'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

import { UserWarning } from './UserWarning'

afterEach(cleanup)

describe('UserWarning component', () => {
    test('should render with correct warning message', () => {
        const { asFragment } = render(<UserWarning />)
        expect(asFragment()).toMatchSnapshot()
    })
})
