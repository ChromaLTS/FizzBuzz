import { fizzbuzz } from './fizzbuzz'

describe('FizzBuzz', () => {
    let times = 10;
    let numberArray = []
    let numbersToChange = [
        {3: "Fuzz"},
        {5: "Buzz"},
        {7: "Cuzz"}
    ]

    for (var i = 1; i <= times; i++)
    {
        numberArray.push(i)
    }

    it('should return 1 if 1 is given', () => {
        expect(fizzbuzz([1], [])).toEqual([1])
    })

    it('should return 2 if 2 is given', () => {
        expect(fizzbuzz([2], [])).toEqual([2])
    })

    it('should return the expected result from 10 numbers', () => { 
        let expectedResult = [
            1,
            2,
            "Fuzz",
            4,
            "Buzz",
            "Fuzz",
            "Cuzz",
            8,
            "Fuzz",
            "Buzz"
        ]
        expect(fizzbuzz(numberArray, numbersToChange)).toEqual(expectedResult)
    })

    it('should return error if no arguments are given', () => {
        expect(() => fizzbuzz()).toThrow('No arguments given')
    })

    it('should return error if missing an argument', () => {
        expect(() => fizzbuzz(numberArray)).toThrow('Missing an argument')
    })
})