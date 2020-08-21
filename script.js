showQuestion(questions[0]);

let questionIndex = 1; //let car change de valeur

/* let designondor_score = 0;
let adminaigle_score = 0;
let datanalouffle_score = 0;
let developpard_score = 0; */

let score = {
    "Dev back de l'extrême": 0,
    "Intégrateur WordPress multitâche": 0,
    "Web Designer pro de l'accessibilité": 0,
    "Dev Front JavaScript": 0
};

// 1) Créer un event sur la validation du formulaire
/* const form = document.getElementsByTagName('form');
const reponse = document.getElementsByName('reponse'); */

// 2) Annuler l'action par default de l'event
/* document.querySelector("form").addEventListener("submit", function(ev) {
    ev.preventDefault();

    if (formulaire.reponse.value === "Designondor") {
        designondor_score++;
    } else if (formulaire.reponse.value === "Adminaigle") {
        adminaigle_score++;
    } else if (formulaire.reponse.value === "Datanalouffle") {
        datanalouffle_score++;
    } else if (formulaire.reponse.value === "Developpard") {
        developpard_score++;
    }

    showQuestion(questions[questionIndex]); 
    questionIndex = questionIndex + 1;
}); */

const formulaire = document.forms[0];
formulaire.addEventListener("submit", function(ev) {
    ev.preventDefault();

    if (formulaire.reponse.value !== "") {
        score[formulaire.reponse.value]++;
        formulaire.reset();

    if (questionIndex < questions.length) {
        showQuestion(questions[questionIndex]);
        questionIndex = questionIndex + 1;
    } else {
        const family = getFamily(score);

        formulaire.className = "hidden";

        const result = document.getElementById("result");
        result.className = "";

        const resultTitle = document.getElementById("result-title");
        resultTitle.textContent = "Félicitation tu es un " + family + " !";

        const image = document.getElementById("banner");
        image.src = "images/" + family + "_logo.svg";

        const resultText = document.getElementById("result-text");
        resultText.textContent = description[family];
        }
    }
});



//l evenement "submit" ne fonctionne que dans la balise FORM


// 3) Ajouter le code de changement de question (avec la variable toussa)


// 4) définir taille du tableau pour que l'évenemnt s'arrête à a fin du tableau

// 5) Faire correspondre avec la famille

// 6) mélanger ordre des réponses

