function fizzbuzz(numbers, replaceList)
{
    result = []

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
        result.push(output)
    });
    
    return result;
}

export {fizzbuzz}