/* To return an array whose element when multilplied by 2 and greater than 10*/


function numbers(array,num)
{
    let emptyArray=[]
    for (let i of array)
    {
          if(i*2>num)
          {
            emptyArray.push(i*2)
          }
    }

return emptyArray;
    
}

console.log(numbers([2,3,4,6],5))