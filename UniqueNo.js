// /*  write a program which returns the total unique number in an array                        */
// /* 
// The approach
// 1. First check wheather the given array is valid (array.length should not be equal to Zero)
// 2.  Taking two pointer as "i" and "j" and comapring i and j.
// 3. Count the unique occurence
// */

// //  function uniqueNo(array)
// //  {
// //      if(array.length!=0)
// //      {
// //          let i=0;
// //          for(let j=i+1;j<array.length;j++)
// //         {
// //             if(array[i]!==array[j])
// //             {
// //                 i++;
// //                  array[i]=array[j];
                
// //              }
            
// //         }
// //  return i+1
// //     }
// //     else{
// //         throw new Error ("Not a valid array")
// //      }
// //  }
// //  console.log(uniqueNo([1,1,1,1,2,2,2,3,3,4,4,5,5,5,6]))





// /*  to find the repeated num in an array*/


let array = [1,1,1,2,3,3,3,4,4,5]

function repeatedNum(array)
{
    let finalArray=[]
    let repeatedArray={};
   for(let numbers of array)
   {
    repeatedArray[numbers] =(repeatedArray[numbers] ||0)+1
       }

       for (let item in repeatedArray)
       {
//             finalArray.push(item)
       }
  
return [finalArray,repeatedArray]
    
}

console.log(repeatedNum(array))




// let array = [1,4,9,16,25]

// function sortt(array)
// {
//      let mul=0;
//      let sortedArray=[]
//      for(let i=0;i<array.length;i++)
//      {
//           mul = array[i]*2

//           if(mul>9)
//           {
//                sortedArray.push(mul)
//           }

          
//      }

     
// }

// console.log(sortt(array))

