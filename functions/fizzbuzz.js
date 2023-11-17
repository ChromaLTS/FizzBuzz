function fizzbuzz(numbers, replaceList) {
    if(numbers === undefined && replaceList === undefined)
    {
        throw new Error('No arguments given')
    }
    if(numbers === undefined || replaceList === undefined)
    {
        throw new Error('Missing an argument')
    }

    let result = numbers.map(number => {
        let output = '';
        replaceList.forEach(replaceElement => {
            let numberToReplace = Object.keys(replaceElement)[0]
            let value = replaceElement[numberToReplace]

            if(number % numberToReplace == 0)
            {
                output += value;
            }
        })
        if(output === '')
        {
            output = number;
        }
        return output;
    });
    
    return result;
}

export {fizzbuzz}