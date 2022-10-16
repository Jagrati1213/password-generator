const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


//set relate the values
let symbolSet= "!@#$%^&*?"
let lowerSet ="abcdefghiklmnopqrstuvwxyz"
let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numset = "1234567890";


//get Random Data value
getData = (dataSet)=>{
    let data = dataSet[Math.floor(Math.random()*dataSet.length)];
    return data;
}

//Generate the Password
let generatePassword = (password ='') => {

    if(uppercaseEl.checked){
        password += getData(upperSet);
    }
    if(lowercaseEl.checked){
        password += getData(lowerSet)
    }
    if(numbersEl.checked){
        password += getData(numset);
    }
    if(symbolsEl.checked){
        password += getData(symbolSet)
    }
   if(password.length < lengthEl.value){
       return generatePassword(password);
   }

   return trimString(password,lengthEl.value);
}

//Trim string to inp lenght
function trimString(str,index){

    if(str.length > index){
        let newStr = str.substring(0,index);
        return newStr;
    }
    else{
        return str;
    }
}

//call the function
generateEl.addEventListener('click',()=>{resultEl.innerHTML = generatePassword()});

//copy the generate pass
clipboardEl.addEventListener('click',()=>{ 

    navigator.clipboard.writeText(resultEl.innerHTML);
    clipboardEl.classList.add('copied');
    setTimeout(()=>{
        clipboardEl.classList.remove('copied');
    },1000)

});