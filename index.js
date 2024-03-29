const characters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const lettersNum=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];

const lettersSpecialCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"];

let PasswordOne = document.querySelector("#passOne");
let PasswordTwo = document.querySelector("#passTwo");
let PasswordLength = document.querySelector("#passLength");
let PassValueOne = "";
let PassValueTwo = "";
let RemoveSymb = document.querySelector("#RemoveSymb");
let RemoveNum = document.querySelector("#RemoveNum");
function GeneratePassOne() {
  if (RemoveSymb.checked === true && RemoveNum.checked === false) {
    PassValueOne += lettersNum[Math.floor(Math.random() * lettersNum.length)];
  } else if (RemoveNum.checked === true && RemoveSymb.checked === false) {
    PassValueOne +=
      lettersSpecialCharacters[
        Math.floor(Math.random() * lettersSpecialCharacters.length)
      ];
  } else if (RemoveNum.checked === true && RemoveSymb.checked === true) {
    PassValueOne += letters[Math.floor(Math.random() * letters.length)];
  } else {
    PassValueOne += characters[Math.floor(Math.random() * characters.length)];
  }
}

function GeneratePassTwo() {
  if (RemoveSymb.checked === true && RemoveNum.checked === false) {
    PassValueTwo += lettersNum[Math.floor(Math.random() * lettersNum.length)];
  } else if (RemoveNum.checked === true && RemoveSymb.checked === false) {
    PassValueTwo +=
      lettersSpecialCharacters[
        Math.floor(Math.random() * lettersSpecialCharacters.length)
      ];
  } else if (RemoveNum.checked === true && RemoveSymb.checked === true) {
    PassValueTwo += letters[Math.floor(Math.random() * letters.length)];
  } else {
    PassValueTwo += characters[Math.floor(Math.random() * characters.length)];
  }
}

function GeneratePassword() {
  PassValueOne = "";
  PassValueTwo = "";
  for (let a = 0; a < PasswordLength.value; a++) {
    GeneratePassOne();
    console.log(a);
  }

  for (let b = 0; b < PasswordLength.value; b++) {
    GeneratePassTwo();
    console.log(b);
  }

  console.log(PassValueOne);
  console.log(PassValueTwo);
  PasswordOne.textContent = PassValueOne;
  PasswordTwo.textContent = PassValueTwo;
}

function CopyTextOne() {
  const textOne = document.createElement("textarea");
  textOne.value = PasswordOne.textContent;
  textOne.setAttribute("readonly", "");
  textOne.style.position = "absolute";
  textOne.style.left = "-9999px";
  document.body.appendChild(textOne);
  textOne.select();
  document.execCommand("copy");
  document.body.removeChild(textOne);
}

function CopyTextTwo() {
  const textTwo = document.createElement("textarea");
  textTwo.value = PasswordTwo.textContent;
  textTwo.setAttribute("readonly", "");
  textTwo.style.position = "absolute";
  textTwo.style.left = "-9999px";
  document.body.appendChild(textTwo);
  textTwo.select();
  document.execCommand("copy");
  document.body.removeChild(textTwo);
}
