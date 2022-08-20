const input = document.querySelector('.input-field');
const button = document.querySelector('.tweet-btn');
const message = document.getElementById('message')
const del = document.querySelector('.clear')




input.addEventListener('input',()=>
{
   let count = input.value.length;
   let remaining = 25-count;
   

   if(remaining<=0)
   {
    document.getElementById('message').innerHTML=`25 limit reached`;

message.classList.add('message')
    input.value = input.value.slice(0,25)   // or input.value.substring(0,25) can be used
  message.classList.add('red')
  message.classList.remove('yellow')
   

   
   }
   else if(remaining<=15)
   {
       document.getElementById('message').innerHTML =`25 character limit ${remaining} remaining`;
       message.classList.add('yellow')
   }
   else 
   {
    document.getElementById('message').innerHTML="";
    message.classList.remove('red','yellow')
   }

  
})

del.addEventListener('click',()=>
{
    input.value= input.value.slice(0,-1);

    
})