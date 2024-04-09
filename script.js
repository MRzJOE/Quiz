const questionsData = [
  "What's is your Name?",
  "Which lang you love?",
  "What food do you want to eat?",
  "what is your fav hobby?",
];
const questionsAnswerA = ["", "CSS", "Sushi", "Writing"];
const questionsAnswerB = ["", "JavaScript", "Fteraa", "Photography"];
const questionsAnswerC = ["", "Python", "Cheese Burger", "Learning"];

const answersElemantA = document.getElementById("answerA");
const answersElemantB = document.getElementById("answerB");
const answersElemantC = document.getElementById("answerC");

const questElemant = document.getElementById("questions");
const answersElemant = document.getElementById("q-contaner");
let Name;
let questNum = 0;
let answerNumA = 0;
let answerNumB = 0;
let answerNumC = 0;
let calcQuestNum = questionsData.length - 1;
let quest;

document.getElementById("submitBtn").addEventListener("click", getName);
function getName() {
  Name = document.getElementById("usarName").value;
  if (Name !== "") {
    alert("Hello! " + Name);
    document.querySelector("#submitBtn").style.display = "none";
    document.querySelector("#usarName").style.display = "none";
    document.querySelector("#nextBtn").style.display = "inline";
    document.querySelector("#nextAnswers").style.display = "inline";
    questNum++;
    answerNumA++;
    answerNumB++;
    answerNumC++;

    answerA = questionsAnswerA[answerNumA];
    answersElemantA.innerHTML = answerA;

    answerB = questionsAnswerB[answerNumB];
    answersElemantB.innerHTML = answerB;

    answerC = questionsAnswerC[answerNumC];
    answersElemantC.innerHTML = answerC;

    quest = questionsData[questNum];
    questElemant.innerHTML = quest;
  } else {
    alert("Please, input your Name");
    console.log(questNum);
  }
}

function addQuest() {
  if (questNum <= calcQuestNum) {
    questNum++;
    answerNumA++;
    answerNumB++;
    answerNumC++;

    answerA = questionsAnswerA[answerNumA];
    answersElemantA.innerHTML = answerA;

    answerB = questionsAnswerB[answerNumB];
    answersElemantB.innerHTML = answerB;

    answerC = questionsAnswerC[answerNumC];
    answersElemantC.innerHTML = answerC;

    quest = questionsData[questNum];
    questElemant.innerHTML = quest;
  } else if (questNum >= calcQuestNum) {
    questElemant.innerHTML = "You have ended the Quiz";
  }
  console.log(questNum);
  console.log(calcQuestNum);
}

var restrict = function(tb) {
    tb.value = tb.value.replace(/[^a-zA-Z]/g, '');
  };