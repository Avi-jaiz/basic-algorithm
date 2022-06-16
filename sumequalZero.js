// // console.log("This is the first question")


let array =[-5,-4,-3,-2,-1,0,1,2,3,4,5,6]

function sum(array)
{
    for(let i=0;i<array.length;i++)
    {
        for(let j=1;j<array.length;j++)
        {
            if(array[i]+array[j]===0)
            {
                return [array[i],array[j]]
            }
           
        }
    }


}

const sum1 = console.log(sum(array))

console.log(sum1) 





