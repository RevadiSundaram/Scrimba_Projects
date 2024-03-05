const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","&lt;",">",".","?","/"];


const passwordBtn = document.getElementById('password');
const passBtn1 = document.getElementById('pass-1');
const passBtn2 = document.getElementById('pass-2');
const copyBtn1 = document.getElementById('copy-1');
const copyBtn2 = document.getElementById('copy-2');

passwordBtn.addEventListener('click', function(){
    passBtn1.innerHTML = generateRandom();
    console.log(passBtn1.value);
    passBtn2.innerHTML = generateRandom();
    console.log(passBtn2.value);
});

copyBtn1.addEventListener('click', function(){
    // console.log(passBtn1.innerText);
    const copyText = passBtn1.innerText;
    // copyText.select();
    // copyText.setSelectionRange(0, 99999);
    // console.log(copyText.select());
    navigator.clipboard.writeText(copyText.value);
})

function getRandom(){
    return Math.floor(Math.random() * characters.length);
}
function generateRandom(){
    let pass = '';
    for(let i=0; i<15; i++){
      pass += characters[getRandom()];
    }
    // console.log("random - ",pass);
    // if(pass.includes('<')){
    //     pass.replace('<', '&lt;');
    //     console.log("<-------------",pass);
    // }
    return pass;
}