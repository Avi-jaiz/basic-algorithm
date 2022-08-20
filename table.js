// /* write a program to print table of 8,9,12,15 */

// function table(num,upto)
// {
//     for(let i=1;i<=upto;i++)
//     {
//        console.log(`${num} * ${i} = ${num*i}`)
//     }
// }

// console.log(table(15,20))



let str='avishekh';

function revWord (str)
{
    let revStr=[];
    for(let i=str.length-1;i>=0;i--)
    {
           revStr.push((str[i]))
    }
let counter={}
    for(let letter of revStr)
    {
         counter[letter] = (counter[letter]||0)+1
    }

    return counter
}

console.log(revWord(str))
