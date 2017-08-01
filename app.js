let times = 100;
let numberArray = []
let arrayOfModulus = {
        a:[3, "fuzzy"],
        b:[5, "buzz"] 
};

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
    let output;
    numberArray.forEach(function(e) 
    {
        let hasOne = false
        Object.keys(arrayOfModulus).forEach(function(element) 
        {
            if(!hasOne)
            {
                if (e % element.which == 0)
                {

                    hasOne = true
                }
                else
                {
                    element.which.forEach(function(el)
                    {
                        if((typof el === string )
                        {

                        }    
                    })
                    console.log(e)
                    hasOne = true
                }

            }

        });
        //console.log(output)
    });
}