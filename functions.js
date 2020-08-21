function showQuestion(questionData) {
    // 1) Récupérer les éléments du DOM dans des variables.
    const domQuestionText = document.querySelector("#question-text");
    const domLabels = document.querySelectorAll("label");
    const domInputs = document.getElementsByName("reponse");

    // 2) Associer le contenu de questionData aux éléments du DOM.
    domQuestionText.textContent = questionData["text"];

    const teams = shuffle(["Dev back de l'extrême", "Intégrateur WordPress multitâche", "Web Designer pro de l'accessibilité", "Dev Front JavaScript"]);

    domLabels[0].textContent = questionData["answers"][teams[0]];
    domInputs[0].value = teams[0];

    domLabels[1].textContent = questionData["answers"][teams[1]];
    domInputs[1].value = teams[1];

    domLabels[2].textContent = questionData["answers"][teams[2]];
    domInputs[2].value = teams[2];

    domLabels[3].textContent = questionData["answers"][teams[3]];
    domInputs[3].value = teams[3];
}

// score : (team[0] + 1) + team[1] + 1, score : team[2] + 1, score : teams[3] + 1

function shuffle(array) {
    // Des opérations... magique ! ☺
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

function getFamily(scores) {
  // Si score Designondor > score Adminaigle et score Designondor > score Datanalouffle et score Designondor > score Developpard
  if (scores["Dev back de l'extrême"] > scores["Intégrateur WordPress multitâche"]
      && scores["Dev back de l'extrême"] > scores["Web Designer pro de l'accessibilité"]
      && scores["Dev back de l'extrême"] > scores["Dev Front JavaScript"]) {
      // alors retourner Designondor
      return "Dev back de l'extrême";
  }
  // Sinon si score Adminaigle > score Datanalouffle et score Adminaigle > score Developpard
  else if (scores["Intégrateur WordPress multitâche"] > scores["Web Designer pro de l'accessibilité"]
      && scores["Intégrateur WordPress multitâche"] > scores["Dev Front JavaScript"]) {
      // alors retourner Adminaigle
      return "Intégrateur WordPress multitâche";
  }
  // Sinon si score Datanalouffle > score Developpard
  else if (scores["Web Designer pro de l'accessibilité"] > scores["Dev Front JavaScript"]) {
      // alors retourner Datanalouffle
      return "Web Designer pro de l'accessibilité";
  }
  // Sinon
  else {
      // alors retourner Developpard
      return "Dev Front JavaScript";
  }
}