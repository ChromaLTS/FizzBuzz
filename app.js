let times = 100;
let outputArray = [];
let arrayOfModulus = {
    3: "fizz",
    5: "buzz"

};

init();
runNumbers();

function init()
{
    for (var i = 1; i <= times; i++)
    {
        outputArray.push(i)
    }
}


function runNumbers()
{
    outputArray.forEach(function(e) 
    {
        Object.keys(arrayOfModulus).forEach(function(element) 
        {
            if (e % element == 0)
            {
                
            }

            console.log(e, element)
        });
    });
}