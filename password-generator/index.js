const characters = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
"3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^",
"&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generateButton = document.getElementsByClassName("generate-btn");
let textField = document.getElementsByClassName("password-field");
let field1 = document.getElementById("field1");
let field2 = document.getElementById("field2");
console.log(generateButton);
console.log(field1);

function randomNumber() {
    return Math.ceil(Math.random() * Number(characters.length));
}

function generatePassword() {
    let password = "";
    for(let i = 0; i < 15; i++) {
        let num = randomNumber();
        password += characters[num];
    }
    return password;
}

console.log(generatePassword());

generateButton[0].addEventListener("click", function(){
    field1.value = generatePassword();
    field2.value = generatePassword();
});

field1.addEventListener("click", function() {
    field1.select();
    navigator.clipboard.writeText(field1.value)
});

field2.addEventListener("click", function() {
    field2.select();
    navigator.clipboard.writeText(field2.value)
});






