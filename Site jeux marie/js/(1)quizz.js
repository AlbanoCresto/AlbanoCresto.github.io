let correctAnswers = 0;
const question1 = "Quelle mer borde la ville de Sébastopol ?";
const question2 = "Quel est l'âge du capitaine ?";
const solution1 = "la mer noire";
const solution2 = 63;

console.log(solution1)

let reponse1 = prompt(question1);

if (reponse1.toLowerCase() === "la mer noire") {
    alert("Gagné ma chérie !");
} else if (reponse1.toLowerCase() === "la mere noir") {
    alert("cousin retourne apprendre le français");
} else {
    alert("Perdu bolosse");
}

let reponse2 = prompt(question2);

if (parseInt(reponse2) === solution2) {
    alert("Gagné ma chérie !");
} else if ((reponse2.toLowerCase) === "146 ans c'est un highlander") {
    alert("fais un effort par pitié");
} else {
    alert("Perdu bolosse");
}


if (reponse1.toLowerCase() === "la mer noire") {
    correctAnswers++;
};
if (parseInt(reponse2.toLowerCase) === solution2) {
    correctAnswers++;
};
if (parseInt(reponse2) === solution2) {
    correctAnswers++;
};

alert(correctAnswers + " bonnes réponses");

if (correctAnswers === 0) {
    alert("espèce de merguez");
}