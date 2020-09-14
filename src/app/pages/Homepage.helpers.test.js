import { filterProfiles } from './Homepage.helpers'
import mockResponse from '../../__mocks__/apiResponse.json'

describe('Profile filtering function', () => {
    test('should return all 10 results when query is empty', () => {
        expect(filterProfiles(mockResponse.results, '').length).toEqual(10)
    })

    test("should return 7 results when query is set to 'n'", () => {
        expect(filterProfiles(mockResponse.results, 'n').length).toEqual(7)
    })

    test("should handle upper case characters 'N'", () => {
        expect(filterProfiles(mockResponse.results, 'n').length).toEqual(7)
    })

    test('should return nothing if query matches no profiles', () => {
        expect(
            filterProfiles(mockResponse.results, 'this query will not match')
                .length
        ).toEqual(0)
    })

    test('should return an unaltered array of nulls if no API response', () => {
        const input = [null, null, null, null, null, null]
        expect(filterProfiles(input, 'n')).toEqual(input)
    })
})
