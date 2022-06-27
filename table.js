/* write a program to print table of 8,9,12,15 */

function table(num,upto)
{
    for(let i=1;i<=upto;i++)
    {
       console.log(`${num} * ${i} = ${num*i}`)
    }
}

console.log(table(15,20))