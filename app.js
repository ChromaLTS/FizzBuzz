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

runNumbers(numberArray, numbersToChange);



function runNumbers(numbers, replaceList)
{
    numbers.map(number => {
        let output = '';
        replaceList.map(replaceElement => {
            numberToReplace = Object.keys(replaceElement)[0]
            value = replaceElement[numberToReplace]

            if(number % numberToReplace == 0)
            {
                output += value;
            }
        })
        if(output === '')
        {
            output = number;
        }
        console.log(output)
    });
}