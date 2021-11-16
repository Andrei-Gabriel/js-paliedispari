const parolaUtente = prompt("Inserisci una parola");

console.log(palidroma(parolaUtente));

function palidroma(str){
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            console.log("str[i] =", str[i] + "\tstr[str.length - 1 - i] =", str[str.length - 1 - i])
            return false;
        }
        console.log("str[i] =", str[i] + "\tstr[str.length - 1 - i] =", str[str.length - 1 - i])
    }
    return true;
}