let utente = [];
do{
    utente[0] = prompt("Pari o Dispari?");
}while(utente[0] != "pari" && utente[0] != "dispari");
do{
    utente[1] = prompt("Inserisci un numero compreso tra 1 e 5");
}while(1 > utente[1] || utente[1] > 5);

const computer = pcRandom();
const pariDispari = fpariDispari(...utente);

if(pariDispari == utente[0]){
    alert("HAI VINTO. La somma é", utente[0]);
}else{
    alert("HAI PERSO. La somma é", pariDispari);
}


function pcRandom(){
    return Math.floor(Math.random() * 5) + 1;
}

function fpariDispari(...n, m){
    if(n[1] + m % 2 == 0){
        return "pari";
    }
    return "dispari";
}