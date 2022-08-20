let string =  `L`;

let number= 280;

console.log(string.length)



function wordCount(string)
{
    const regex= /[\.?! ,]/g;
    string = string.replace(regex,'<>');

    return string.split("<>").length

    

    

}



console.log(wordCount(string))
