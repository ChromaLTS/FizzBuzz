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

runNumbers(numberArray);



function runNumbers(numbers, replaceList)
{
    numbers.map(number => {
        let output = '';
        replaceList.map(replaceElement => {
            numberToReplace = Object.keys(replaceElement)[0]
            value = replaceElement[0]

            if(number % numberToReplace == 0)
            {
                output += ele;
            }
            el.forEach(function(ele)
            {
                if(typeof ele === 'number' && (ele % 1) === 0)
                {
                    activeNumber = ele;
                }

                if(typeof ele === 'string')
                {
                    if(number % activeNumber == 0)
                    {
                        output += ele;
                    }
                }
            });
        });
        if(output === '')
        {
            output = number;
        }
        console.log(output)
    });
}