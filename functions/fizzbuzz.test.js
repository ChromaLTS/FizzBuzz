import { fizzbuzz } from './fizzbuzz'

describe('FizzBuzz', () => {
    it('should return 1 if 1 is given', () => {
        expect(fizzbuzz([1], [])).toEqual([1])
    })
})