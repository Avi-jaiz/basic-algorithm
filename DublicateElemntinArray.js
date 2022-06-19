
/* to pop out duplicate elements from an array  */


let array = [1,2,2,3,4,5,6,6,6,7];


function dub(array)
{
    let dublicate=[];
    if(array.length!==0)
    {
        let i=0;
        for (let j=i+1;j<array.length;j++)
        {
            if(array[i]==array[j])
            { 
           
               continue;
            }
            else if(array[i]!==array[j]){
                i++;
                array[i]=array[j];
                dublicate.push((array[i]-1))
            }
        }
        return dublicate;
    }
}

console.log(dub(array))

