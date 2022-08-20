let string = "javascriptloop"
let vowel=['a','e','i','o','u'];
// function Vowelsrectify()
// {

//    for (let i=0;i<string.length;i++)
//    {
//        if(vowel.indexOf(string[i])>-1)
//        {
//                    console.log(string[i])  
//        }
     

      
//    }

//    for(let i=0;i<string.length;i++)
//    {
//     if(vowel.indexOf(string[i])<0)
//     {
//         console.log(string[i])
//     }
//    }




// }
// console.log(Vowelsrectify(string))
function verify(string)
{
   for (let i=0;i<string;i++)
   {
      if(vowel.indexOf(string[i])>-1)
      {
         console.log(string[i])
      }
   }
}

console.log(verify(string))