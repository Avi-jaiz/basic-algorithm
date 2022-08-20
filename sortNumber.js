// let array = [9,8,7,6,5,4,3,2,1]

// function sortedNum(array)
// {
//    let left=0;
//    let right=array.length-1;

//   for(let i=0;i<array.length;i++) 

//   {
//           for(let j=1;j<array.length;j++)
//           {

//             let sortedNu =[];
//             let temp=0;
//             if(array[left]>array[right])
//             {
//                   temp = array[right];
//                   array[right]=array[left];
//                   array[left]=temp;
//             }
 
//             sortedNu+=[array]
 
//             return sortedNu
//     }


//           }
//   }
          



// console.log(sortedNum(array))


let array = [9,8,7,6,5,4,3,2,1];

function sorttheNum(array)
{
      let left=0;
      let right=left+1;
let sortedArray=[]
  while (left<right)
  {
      let temp=0;
      
      if(array[left]>array[right])
      {
             temp=right;
             right=left;
             left=temp;
      }
  }

  return sortedArray+=array[left]
}

console.log(sorttheNum(array))