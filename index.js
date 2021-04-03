const express = require('express')
const app = express()
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

//----------------------------------------------------------------------------------------------------------------------------------
// function isTelOk(inputTel)
app.post('/checkTel', function (req, res) {
  const GoodOrNot = isTelOk(req.body.telnum)
  res.json({ response: GoodOrNot })
})

function isTelOk(inputTel) {
  const regex = /^(0|\+33)[1-9]( *[0-9]{2}){4}$/;
  const verifTel = inputTel.search(regex);
  return verifTel !== -1;
}

/*    Remplace le if dans un fonction()
  if (verifTel === -1) {
    return false ;
  }
  else {
    return true ;
  }
let inputTel = '01 02 03 04 05';

if (isTelOk(inputTel)) {
  console.log ('Le numéro de téléphone est correct !');  
} 
else {
  console.log ('Le numéro de téléphone est incorrect !');
}
*/

app.post('/checkMail', function (req, res) {
  const goodOrNot = isMailOk(req.body.mail)
  res.json({ response: goodOrNot })
})

function isMailOk(inputMail) {
  const regex = /^[a-zA-Z0-9\-\_\.]+\@[a-zA-Z0-9\-\_]+\.[a-zA-Z]{1,9}$/;
  const verifMail = inputMail.search(regex);
  return verifMail !== -1;    //Remplace le if dans un fonction()
}


app.listen(3000, function () {
  console.log('myScripte.js launched on http://localhost:3000');
})
