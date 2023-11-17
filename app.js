import {fizzbuzz} from './functions/fizzbuzz.js';

let times = 1000;
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

fizzbuzz(numberArray, numbersToChange).map(element => {
    console.log(element)
})



