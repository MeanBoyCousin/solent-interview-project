import React from 'react'
import 'dotenv/config'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

import { ProfileDetails } from './ProfileDetails'
import mockResponse from '../../../__mocks__/apiResponse.json'

afterEach(cleanup)

describe('ProfileDetails component', () => {
    test('should render with correct profile details', () => {
        const { asFragment } = render(
            <ProfileDetails profile={mockResponse.results[0]} />
        )
        expect(asFragment()).toMatchSnapshot()
    })
})
