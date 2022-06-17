// // console.log("This is the first question")
/*  Write a program to find out the first two pairs whose sum will be Zero   */

// let array =[-5,-4,-3,-2,-1,0,1,2,3,4,5,6]

// function sum(array)
// {
//     for(let i=0;i<array.length;i++)
//     {
//         for(let j=1;j<array.length;j++)
//         {
//             if(array[i]+array[j]===0)
//             {
//                 return [array[i],array[j]]
//             }
           
//         }
//     }


// }

// const sum1 = console.log(sum(array))

// console.log(sum1) 


/* The above algorith gives O(n^2) time complexity */


/* Below algo which gives O(n)  */



// function isSumZero(array)
// {
   
//    for(let i=0;i<array.length;i++)
//    {
//          for(let j=i+1;j<array.length;j++)
//          {
//             if(array[i]+array[j]===0)
//             {
//                 return [array[i],array[j]]
//             }
//          }
//    }
// }
// const ans = isSumZero([-3,-2,-1,0,1,2,3,4])
// console.log(ans)


let array=[-3,-2,-1,0,1,2,3,4]
function isSumPair(array)
{
    let leftIndex=0;
    let rightIndex=array.length-1;

    while(leftIndex<rightIndex)
    {
        let sum= array[rightIndex]+array[leftIndex]
        if(sum===0)
        {
            return [array[leftIndex],array[rightIndex]]
        }

        else if(sum<0)
        {
            leftIndex++
        }
        else if(sum>0)
        {
            rightIndex--
        }
    }


}

console.log(isSumPair(array))


