let array=[1,2,3,4,5,6,7,8,9,10];
let number=2;

function binarySearch(array,number)
{
    let minIndex=0;
    let maxIndex=array.length-1;

    while(minIndex<=maxIndex)
    {
        let midIndex= Math.floor(minIndex+maxIndex/2)
        console.log("midIndex= "+ midIndex , "minIndex= "+ minIndex, 'maxIndex= '+ maxIndex) // this explains how dividing is going on

        if(array[midIndex]<number) 
        {
            minIndex=minIndex+1   //if the element of the midIndex is smaller than the number then
                                       // minIndex will be increased by 1
        }
        else if(array[midIndex]>number)
        {                                          //if the element of the midIndex is greater than the number then
                                                        // maxIndex will be decreased by 1
            maxIndex=maxIndex-1
        }

        else if(array[midIndex]===number)
        {
            return `the index of ${number} is ${midIndex}`;
        }
    }
    
}

console.log(binarySearch(array,number))