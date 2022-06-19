
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
