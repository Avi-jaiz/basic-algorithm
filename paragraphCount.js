

function paragraphCount(paragraph)
{
    const regex= /[\.?!]/g;
    paragraph = paragraph.replace(regex,'<>')

    return paragraph.split('<>').length+1

}


paragraph =   "hello avi jaiswal"

console.log(paragraphCount(paragraph))


