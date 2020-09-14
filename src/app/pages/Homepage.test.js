import React from 'react'
import 'dotenv/config'
import '@testing-library/jest-dom'
import {
    render,
    screen,
    cleanup,
    act,
    waitForElementToBeRemoved
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import fetchMock from 'jest-fetch-mock'

import { Homepage } from './Homepage'
import mockResponse from '../../__mocks__/apiResponse.json'

beforeAll(() => {
    fetchMock.enableMocks()
})

afterEach(cleanup)

describe('Homepage component', () => {
    test('should keep initial skeleton profiles and render warning message', async () => {
        act(() => {
            fetch.mockReject(new Error('API failed to fetch'))
            render(<Homepage />)
        })

        const warningMessage = await screen.findByText(
            /There was a problem fetching the staff profiles. Please refresh to try again./i,
            { selector: 'p', exact: true }
        )
        expect(warningMessage).toBeInTheDocument()

        const skeletonProfiles = await screen.findAllByTestId('skeleton', {
            exact: true
        })
        expect(skeletonProfiles.length).toEqual(6)
    })

    test('should render 10 profiles', async () => {
        act(() => {
            fetch.once(JSON.stringify(mockResponse))
            render(<Homepage />)
        })

        const profiles = await screen.findAllByAltText(
            /The profile picture for /i,
            {
                exact: true
            }
        )
        expect(profiles.length).toEqual(10)
        expect(fetch).toHaveBeenCalledWith(
            'https://randomuser.me/api/?results=10'
        )
    })

    test('should render `no results found` message if filter does not match any profiles', async () => {
        act(() => {
            fetch.once(JSON.stringify(mockResponse))
            render(<Homepage />)
        })

        const input = await screen.findByRole('textbox')
        userEvent.type(input, 'this input returns no results')

        const noResultsMessage = await screen.findByText(/No results found./i, {
            selector: 'p',
            exact: true
        })
        expect(noResultsMessage).toBeInTheDocument()
    })

    test('ProfileDetails component should mount and un-mount', async () => {
        await act(async () => {
            fetch.once(JSON.stringify(mockResponse))
            render(<Homepage />)
            const profiles = await screen.findAllByAltText(
                /The profile picture for /i,
                {
                    exact: true
                }
            )
            userEvent.click(profiles[0].closest('div'))
        })

        const selectedProfileImage = screen.getByAltText(
            /the member of staff you selected/i
        )
        expect(selectedProfileImage).toBeInTheDocument()
        expect(selectedProfileImage).toHaveClass('profile')

        act(() => {
            const closeButton = screen.getByRole('button', {
                name: /Close/i,
                exact: true
            })
            userEvent.click(closeButton)
        })

        await waitForElementToBeRemoved(selectedProfileImage)
        expect(selectedProfileImage).not.toBeInTheDocument()
    })
})
