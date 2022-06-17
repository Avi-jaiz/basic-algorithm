/* Problem no- 02  */
/*   
Find wheather the given string is anagram or not

*/
/*  Two strings will be said an angram when both the string have same length as well they have same number
of letters irrespective of positions of the letters */

/*
Satify two conditions to know a string is anagram or not

*/

function isAnagram(str1,str2)
{
    if(str1.length!==str2.length)
    {
        return `The given ${str1} and ${str2} is not a anagram`
    }

let counter={}
    for (let letter of str1)
    {
      counter[letter] =(counter[letter]||0)+1;   
      
    }
console.log(counter)

for(let items of str2)
{
    if(!counter[items])
    {
        return false
    }
    else{
        counter[items] -=1
    }
    return "Anagram"
    
}

}

const ans = isAnagram("Helloabcde","ollehabcde")
console.log(ans)