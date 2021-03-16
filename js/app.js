'use strict';
let yourName = prompt('Hey there, whats your name?');
alert ('welcome '+yourName +'nice to meet you 😄');
let ans1 = prompt(yourName+ ' ,are you ready to know me ?');
let point=0;
switch (ans1.toLowerCase()) {
case 'yes':
case 'y':
  alert(ans1 + ' lets go ♥☺');
  // eslint-disable-next-line no-case-declarations
  let ans3=prompt('do you think i am a movie addict?');
  if (ans3.toLowerCase()==='no'|| ans3.toLowerCase() ==='n') {
    point++;
    console.log('true');
    alert('true');
    alert('your answer is '+ans3+' ,I only like some of theme');
  } else {
    console.log('false');
    alert('false');
    alert('you answer is '+ans3 + ' NO IAM NOT ');
  }
  // eslint-disable-next-line no-case-declarations
  let ans4=prompt('do you think that i am a good painter?');
  if (ans4.toLowerCase()==='yes'|| ans4.toLowerCase() ==='y') {
    point++;
    console.log('true');
    alert('true');
    alert('your answer is '+ans4+' ,i am a very good one');

  } else {
    console.log('false');
    alert('false');
    alert('you answer is '+ans3 + ' NO IAM a good one ');

  }
  // eslint-disable-next-line no-case-declarations
  let ans5=prompt('do i like shawarma?🌯🌯🌯');
  if (ans5.toLowerCase()==='yes'|| ans5.toLowerCase() ==='y') {
    point++;
    console.log('true');
    alert('true');
    alert('your answer is '+ans5+' ,shawarma is my second name  ');

  } else {
    console.log('false');
    alert('false');
    alert('you answer is '+ans5 + ' who does not!! ');

  }

  // eslint-disable-next-line no-case-declarations
  let ans6=prompt('am i a makeup artist?');
  if (ans6.toLowerCase()==='no'|| ans6.toLowerCase() ==='n') {
    point++;
    console.log('true');
    alert('true');
    alert('your answer is '+ans6+' ,unfortunately it is true ');

  } else {
    console.log('false');
    alert('false');
    alert('you answer is '+ans6 + ' I wish i was ');

  }

  // eslint-disable-next-line no-case-declarations
  let ans7=prompt('do you think i am good in mathe ?');
  if (ans7.toLowerCase()==='yes'|| ans7.toLowerCase() ==='y') {
    point++;
    console.log('true');
    alert('true');
    alert('your answer is '+ans7+' ,einstein is my grandfather');

  } else {
    console.log('false');
    alert('false');
    alert('you answer is '+ans7 + 'Iam a math genius ');
  }
  // eslint-disable-next-line no-case-declarations
  let ans8;
  // eslint-disable-next-line no-case-declarations
  let i=0;
  do {
    i=i++;
    ans8=Number(prompt('guss my age '));
    if (ans8>23) {
      console.log('You have guessed too high!');
      alert('You have guessed too high!');
      // eslint-disable-next-line no-unused-vars
      alert ('again') ;
    }
    else if (ans8===23) {
      console.log('true');
      alert('true');
      point++;

    }
    else {
      console.log('You have guessed too low!');
      alert('You have guessed too low!');
      // eslint-disable-next-line no-unused-vars
      alert ('again') ;
    }
    console.log(i);
    i++;

  } while ( ans8 !== 23 && i<4);
  alert('i am 23 years old');

  // eslint-disable-next-line no-case-declarations
  let h =['irbid','jordan','bushra'];
  // eslint-disable-next-line no-case-declarations
  let k=0;
  // eslint-disable-next-line no-case-declarations
  let ans9;
  do{
    k++;
    //k++;
    ans9=prompt('Guess where I live');

    if (ans9===h[0]) {
      alert(ans9 +' thats true');
      k=6;
      point++;
    }
    else if (ans9===h[1]) {
      alert(ans9 +' thats true🤠🤠🤠🤠');
      k=6;
      point++;
    }
    else if (ans9===h[2]) {
      alert(ans9 +' thats true');
      k=6;
      point++;
    }
    else{
      alert ('again') ;
    }
    console.log(k);



  }while( k!==6 ) ;
  alert('i live in  '+h);

  alert ('you got  '+point +' frome 7');

  break;

default:
  alert(ans1 + ' !!💔☹️') ;

  // eslint-disable-next-line no-case-declarations
  let ans2 = prompt(yourName+ ' ,answer withe yes if you change your mined ☺');

  if (ans2.toLowerCase() ==='y'||ans2==='yes'){
    alert(ans1 + ' lets go ♥☺');
    // eslint-disable-next-line no-case-declarations
    let ans3=prompt('do you think i am a movie addict?');
    if (ans3.toLowerCase()==='no'|| ans3.toLowerCase() ==='n') {
      point++;
      console.log('true');
      alert('true');
      alert('your answer is '+ans3+' ,I only like some of theme');
    } else {
      console.log('false');
      alert('false');
      alert('you answer is '+ans3 + ' NO IAM NOT ');
    }
    // eslint-disable-next-line no-case-declarations
    let ans4=prompt('do you think that i am a good painter?');
    if (ans4.toLowerCase()==='yes'|| ans4.toLowerCase() ==='y') {
      point++;
      console.log('true');
      alert(ans4 +' true');
      alert('your answer is '+ans4+' ,i am a very good one');

    } else {
      console.log('false');
      alert(' false');
      alert('you answer is '+ans4 + ' NO IAM a good one ');

    }
    // eslint-disable-next-line no-case-declarations
    let ans5=prompt('do i like shawarma?🌯🌯🌯');
    if (ans5.toLowerCase()==='yes'|| ans5.toLowerCase() ==='y') {
      point++;
      console.log('true');
      alert(' true');
      alert('your answer is '+ans5+' ,shawarma is my second name  ');

    } else {
      console.log('false');
      alert('false');
      alert('you answer is '+ans5 + ' who does not!! ');

    }

    // eslint-disable-next-line no-case-declarations
    let ans6=prompt('am i a makeup artist?');
    if (ans6.toLowerCase()==='no'|| ans6.toLowerCase() ==='n') {
      point++;
      console.log('true');
      alert('true');
      alert('your answer is '+ans6+' ,unfortunately it is true ');

    } else {
      console.log('false');
      alert('false');
      alert('you answer is '+ans6 + ' I wish i was ');

    }

    // eslint-disable-next-line no-case-declarations
    let ans7=prompt('do you think i am good in mathe ?');
    if (ans7.toLowerCase()==='yes'|| ans7.toLowerCase() ==='y') {
      point++;
      console.log('true');
      alert('true');
      alert('your answer is '+ans6+' ,einstein is my grandfather');

    } else {
      console.log('false');
      alert('false');
      alert('you answer is '+ans7 + 'Iam a math genius ');
    }
    // eslint-disable-next-line no-case-declarations
    let ans8;
    // eslint-disable-next-line no-case-declarations
    let i=0;
    do {
      i=i++;
      ans8=Number(prompt('guss my age '));
      if (ans8>23) {
        console.log('You have guessed too high!');
        alert(ans8+ ' You have guessed too high!');
        // eslint-disable-next-line no-unused-vars
        alert ('again') ;
      }
      else if (ans8===23) {
        console.log('true');
        alert(ans8+' true');
        point++;

      }
      else {
        console.log('You have guessed too low!');
        alert(ans8+' You have guessed too low!');
        // eslint-disable-next-line no-unused-vars
        alert ('again') ;
      }
      console.log(i);
      i++;

    } while ( ans8 !== 23 && i<4);
    alert( 'I am a 23 years old');


    // eslint-disable-next-line no-case-declarations
    let h =['irbid','jordan','bushra'];
    // eslint-disable-next-line no-case-declarations
    let k=0;
    // eslint-disable-next-line no-case-declarations
    let ans9;
    do{

      ans9=prompt('Guess where I live');

      if (ans9===h[0]) {
        alert(ans9 +' thats true');
        k=6;
        point++;
      }
      else if (ans9===h[1]) {
        alert(ans9 +' thats true🤠🤠🤠🤠');
        k=6;
        point++;
      }
      else if (ans9===h[2]) {
        alert(ans9 +' thats true');
        k=6;
        point++;
      }
      else{
        alert ('again') ;
      }
      console.log(k);


      k++;
    }while( k!==6 ) ;
    alert(' i live in  '+h);
    alert ('you got  '+point +' frome 7');

  }else{

    alert( 'come back whenever you want ♥☺');
  }

  break;
}


