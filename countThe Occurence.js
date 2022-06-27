/* Count the occurence of the digits or letters inside and array       */

function counterNum(array)
{
    let counter={}
   for(let o of array)
   {
    counter[o] =(counter[o]||0)+1
   }

    console.log(counter)



}

console.log(counterNum(["a","A","C",'c',"k"]))