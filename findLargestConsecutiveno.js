/*  problem no. 05*/

/*
  to find sum of 4 consecutive number of a given array, here num is totol consecutive number ...like 1,2,3,4 ....5,6,7,8



  hints : how many times the loop will work to find out the consecutive no.

  array.length - num+1 i.e if array length is 10 and num is 4(consectuive nos) => 10-4+1 = 7 times the outter loop will run

*/

let array =[1,2,3,4,3,5,4,6,7,8]  //total 10 elements
let num =4; //the 4 consecutive number is given


const largestConNum =(array,num)=>
{
   if(num>array.length)       //num should not be greater than array length .
   {
    throw new error ("Num should not be greater than array")
   }

   else{
          let max=0
    for(let i=0;i<array.length-num+1;i++)      //here for loop must run wrt num and it should not exit the pair keep the length
    {
        let temp=0;                       
        for(let j=0;j<num;j++)                //here j must run upto the length satisfying the 'num' consecutive nos
        {
            
            temp += array[i+j]
        }

        if(temp>max)
        {
            max=temp
        }
        
    }

return max

   }

}

console.log(largestConNum(array,num))