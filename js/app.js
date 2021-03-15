'use strict';
let yourName = prompt('Hey there, whats your name?');
alert ('welcome '+yourName);
let ans1 = prompt(yourName+ ' ,are you ready to know me ?');

switch (ans1) {
case 'yes':
case 'y':
  alert(ans1 + ' lets go ♥☺');
  // eslint-disable-next-line no-case-declarations
  let ans3=prompt('do you know my name?');
  alert('you answer is '+ans3 + ' , my name is Rula');
  alert('nice to meet you 😄');
  // eslint-disable-next-line no-case-declarations
  let ans4=prompt('do you know my age?');
  alert('never ask a woman about her age 😒');
  alert('I am just kidding 🤭🤭');
  alert('you answer is '+ans4 + ' , I am 23 years old');
  // eslint-disable-next-line no-case-declarations
  let ans5=prompt('do you know what is my specialist?');
  alert('you answer is '+ans5 + ' , I am a proud biomedical engineer😎');
  alert ('here is a fun fact about me :one thing i cannot live without coffee ☕️');
  alert('Take many cups of coffee☕️☕️☕️☕️☕️☕️ ,and if you want to know me peter read about me in this page');
  // alert('if you want to know me peter read about me in this page');
  break;

default:
  alert(ans1 + ' !!💔☹️') ;

  // eslint-disable-next-line no-case-declarations
  let ans2 = prompt(yourName+ ' ,answer withe yes if you change your mined ☺');

  if (ans2==='y'||ans2==='yes'){
    alert(ans1 + ' lets go ♥☺');
    // eslint-disable-next-line no-case-declarations
    let ans3=prompt('do you know my name?');
    alert('you answer is '+ans3 + ' , my name is Rula');
    alert('nice to meet you 😄');
    // eslint-disable-next-line no-case-declarations
    let ans4=prompt('do you know my age?');
    alert('never ask a woman about her age 😒');
    alert('I am just kidding 🤭🤭');
    alert('you answer is '+ans4 + ' , I am 23 years old');
    // eslint-disable-next-line no-case-declarations
    let ans5=prompt('do you know what is my specialist?');
    alert('you answer is '+ans5 + ' , I am a proud biomedical engineer😎');
    alert ('here is a fun fact about me :one thing i cannot live without coffee ☕️');
    alert('Take many cups of coffee☕️☕️☕️☕️☕️☕️ ,and if you want to know me peter read about me in this page');
    // alert('if you want to know me peter read about me in this page');

  }else{

    alert( 'come back whenever you want ♥☺');
  }

  break;
}


