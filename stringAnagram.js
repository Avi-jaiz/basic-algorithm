/* Problem no- 02  */
/*   
Find wheather the given string is anagram or not

*/
/*  Two strings will be said an angram when both the string have same length as well they have same number
of letters irrespective of positions of the letters */

/*
Satify two conditions to know a string is anagram or not

*/


// function isAnagram(str1,str2)
// {
//     if(str1.length!==str2.length)
//     {
//         false;
//     }

//     else
//     {
//         let counter={}
//         for(let letter of str1)
//         {
//             counter[letter] = (counter[letter] ||0)+1
//         }
//         console.log(counter)
//         for(let item of str2)
//         {
//             if(!counter[item])
//             {
//                 return false;
//             }
//             else
//             {
//                 counter[item] -=1
//             }
//         }
//         console.log(counter)

//         return 'Anagram'
//     }
// }

// const ans = isAnagram("hello","olleh")
// console.log(ans)


// function isAnagram(str1,str2)
// {
//     if(str1.length!==str2.length)
//     {
//         return false;
//     }
//     else 
//     {
//         let counter={};
//         for(let letter of str1)
//         {
//            counter[letter] = (counter[letter]||0) +1
           
//         }

//         for(let item of str2)
//         {
//             if(!counter[item])
//             {
//                 return false
//             }

//             else 
//             {
//                 counter[item] -=1;
                
//             }

            
//         }

//         return `Its a Anagram`

//     }
// }

// console.log(isAnagram('hello','olelh'))

