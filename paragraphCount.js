

function paragraphCount(paragraph)
{
    const regex= /[\.?!]/g;
    paragraph = paragraph.replace(regex,'<>')

    return paragraph.split('<>').length-1

}


paragraph =   "Hello.hello!hellohi"

console.log(paragraphCount(paragraph))
