const btnElement = document.querySelector('#btn');
const inputElement = document.querySelector('input[type="text"]');
const copyIcon = document.querySelector('.display img');


const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = '@#$%^&*()_+~|{}[]<>/-=';
const allCharacter = upperCase + lowerCase + symbol + number;

function createPassword(){

    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)]; 

    while(password.length < length){
        password += allCharacter[Math.floor(Math.random() * allCharacter.length)]; 
    }

    inputElement.value = password;
}

function copyPassword(){
    inputElement.select();
    document.execCommand('copy');
}


btnElement.addEventListener('click', createPassword);
copyIcon.addEventListener('click', copyPassword);
