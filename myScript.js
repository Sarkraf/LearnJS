/*const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

console.log('myScripte.js launched on http://localhost:3000');
*/
//----------
/*
function isTelOk(inputTel) {
  const regex = /^(0|\+33)[1-9]( *[0-9]{2}){4}$/;
  const verifTel = inputTel.search(regex);
  // if (verifTel === -1) {
  //   return false ;
  // }
  // else {
  //   return true ;
  // }
  return verifTel !== -1;    //Remplace le if dans un fonction()
}
let inputTel = '01 02 03 04 05';

if (isTelOk(inputTel)) {
  console.log ('Le numéro de téléphone est correct !');  
} 
else {
  console.log ('Le numéro de téléphone est incorrect !');
}
*/
//---------
function isMailOk(inputMail) {
  const regex = /^[a-zA-Z0-9\-\_\.]+\@[a-zA-Z0-9\-\_]+\.[a-zA-Z]{1,9}$/;
  const verifMail = inputMail.search(regex);
  /*if (verifMail === -1) {
    return false ;
  }
  else {
    return true ;
  }*/
  return verifMail !== -1;    //Remplace le if dans un fonction()
}
let inputMail = 'sarkraf.dev@gmail.com';

if (isMailOk(inputMail)) {
  console.log ('L\'adresse mail est correct !');  
} 
else {
  console.log ('L\'adresse mail est incorrect !');
}
