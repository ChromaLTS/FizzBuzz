let times = 1000;
let numberArray = []
let arrayOfModulus = [
    [3, "Fuzz"],
    [5, "Buzz"],
    [7, "Cuzz"]
]

init();
runNumbers();

function init()
{
    for (var i = 1; i <= times; i++)
    {
        numberArray.push(i)
    }
}


function runNumbers()
{
    numberArray.forEach(function(e) 
    {
        let output = '';
        arrayOfModulus.forEach(function(el)
        {
            let activeNumber;
            el.forEach(function(ele)
            {
                if(typeof ele === 'number' && (ele % 1) === 0)
                {
                    activeNumber = ele;
                }

                if(typeof ele === 'string')
                {
                    if(e % activeNumber == 0)
                    {
                        output += ele;
                    }
                }
            });
        });
        if(output === '')
        {
            output = e;
        }
        console.log(output)
    });
}