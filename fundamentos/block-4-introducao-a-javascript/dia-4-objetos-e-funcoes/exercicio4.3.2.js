function checkPalindrome(name){
    let splitted = name.split("");
    let reversed = splitted.reverse();
    let rejoined = reversed.join("");
    if (name === rejoined){
        return true;
    }
    return false;

}

console.log(checkPalindrome('arara'));
