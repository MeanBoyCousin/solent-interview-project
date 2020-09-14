import React from 'react'
import 'dotenv/config'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

import { ProfileBasic } from './ProfileBasic'
import mockResponse from '../../../__mocks__/apiResponse.json'

afterEach(cleanup)

describe('ProfileBasic component', () => {
    test('should render with correct profile details', () => {
        const profile = mockResponse.results[0]
        const { asFragment } = render(
            <ProfileBasic
                picture={profile.picture.thumbnail}
                name={`${profile.name.first} ${profile.name.last}`}
                uuid={profile.login.uuid}
            />
        )
        expect(asFragment()).toMatchSnapshot()
    })

    test('should render with skeleton elements if no profile data is provided', () => {
        const { asFragment } = render(<ProfileBasic />)
        expect(asFragment()).toMatchSnapshot()
    })
})
