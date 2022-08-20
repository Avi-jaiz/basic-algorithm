/*
Write a program to check the sqaure of elements of first array is present in the second array or not 


*/


let array1=[1,2,3,4] 
let array2=[1,4,9,16]

function squareCheck(array1,array2)  /* This programs gives the time complexity of O(n^2)     */
{
    for(let i=0;i<array1.length;i++)
    {
        let isSquare=false;
        for(let j=0;j<array2.length;j++)
        {
               if(array1[i]*array1[i]===array2[j])
               {
                    isSquare=true;
               }
               if(j===array2.length-1)
               {
                
                if(!isSquare)
                {
                    return false
                }
               }
               
        }
        return isSquare;
    }
    
}
console.log(squareCheck(array1,array2))