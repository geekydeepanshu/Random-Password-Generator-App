
console.log($_passwordGenerator());

function $_passwordGenerator(passLength = 8,isNumberAllowed = false,isSpecialCharacterAllowed = false) {
    let generatedPassword = "";
    for (let i = 0; i < passLength; i++) {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(isNumberAllowed){
            str+="0123456789";
        }
        if(isSpecialCharacterAllowed){
            str+="~!@#$%^&*";
        }
        generatedPassword += str[$_randomIndex(str.length + 1)];
    }
    return generatedPassword;
}


function $_randomIndex(strLen) {
    return Math.floor(Math.random() * strLen);
}