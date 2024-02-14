let randomNumber = Math.floor(Math.random() *  500) + 1;
console.log(randomNumber);

let roundedNumber = Math.round(randomNumber);
console.log(roundedNumber);

let count = 0;

while (true){
    guess = parseInt(prompt(count + " essais / Trouvez le chiffre aléatoire entre 1 et 500 : "))
    

    if (guess === roundedNumber){
        alert("lécifitez-vous, vous avions trouvé !");
        count++;
        break;
    } else if (guess > roundedNumber){
        alert("Vous voyez trop grand");
        count++;
    } else if (guess < randomNumber){
        alert("Voyez plus grand");
        count++;
    } else {
        alert("erreur, vous nous faites n'importe quoi");
        count++;
    }
}


if (guess === roundedNumber){
alert("Wouhou, ça vous fait " + count + " tentatives !");
}