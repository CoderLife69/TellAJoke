let jokes= ['Guess the number of programmers it takes to change a light bulb? Zero its a hardware problem','There are only 10 kinds of people in this world: those who know binary and those who don’t.','Real programmers count from 0.', 'Why did the programmer quit his job? Because he didnt get arrays.', 'A foo walks into a bar takes a look around and says Hello World','0 is false 1 is true right? 1','Things arent always #000000 and #FFFFFF.','What is the most used language in programming? Profanity','!False its funny because its True','You had me at Hello World','2b||!2b','Yesterday I changed the name on my wifi to Hack if you can. Today I found it named Challenge Accepted','A programmer is a person who fixed a problem that you didnt know you had in a way you dont understand','How can you tell if a computer geek is an extrovert? They stare at your shoes when you talk instead of their own.','I would love to change the world but they wont give me the source code.','If at first you dont succedd call it version 1.0','Computers make very fast very accurate mistakes','I farted in the Apple store and everyone got mad at me. Not my fault they dont have Windows.','Knock Knock... Whos there? Art... Art Who? R2D2','Hilarious and amazingly true thing: if a pizza has a radius (z) and a depth (a) that pizzas volume can be defined Pi*z*z*a.'];
let Numb = Math.floor(Math.random()*(20));
let btn = document.querySelector('.no');
let text = document.querySelector('.texta');
let tim = document.querySelector('.tim')
let date;
let second;
let hour;
let minutes;
setInterval(()=>{
  date = new Date();
  hour= date.getHours();
  minutes= date.getMinutes();
  second=date.getSeconds();
  tim.innerText=`Current time:- ${hour-12}:${minutes}:${second}`;
},1000)
function joke(){
  text.innerText= jokes[Numb];
  
}
function jokee(){
  Numb=Math.floor(Math.random()*20)
  text.innerText= jokes[Numb];
  
}
btn.addEventListener('click',jokee)
joke();
