let array = [9,8,7,6,5,4,3,2,1]

function sortarr(array)
{
    for(let i=0;i<array.length-1;i++)
    {
        let sortedArr=[]
        for(let j=i+1;j<array.length;j++)
        {
            let temp=[]
            if(array[i]>array[j])
            {
                temp = array[j];
                array[j]=array[i];
                array[i]=temp;

                
            }

           
          
return temp;
        
           
        }

    
    }
}
console.log(sortarr(array))