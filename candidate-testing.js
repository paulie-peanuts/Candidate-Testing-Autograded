const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
candidateName=('');
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
question = "Who was the first American woman in space? ";
let correctAnswer;
correctAnswer = "Sally Ride";
let candidateAnswer;
candidateAnswer = ('');

//TODO: Variables for Part 2
// let question4array = [8, 'Orbit', 'Trajectory', 45];
let questions = ["Who was the first American woman in space? ", 
"True or false: 5 kilometer == 5000 meters? ", 
"(5 + 3)/2 * 10 = ? ", 
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
"What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('Hello candidate! What is your name? ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (i = 0; i < 5; i++) {
    candidateAnswers.push(input.question(`${i+1}) ${questions[i]}`));
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);
}
  // candidateAnswer = input.question(question);
  
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*if (candidateAnswer === correctAnswer) {
    console.log(`Well done ${candidateName}! ${candidateAnswer} is correct!`);
} else {
    console.log(`I'm sorry ${candidateName}, but ${candidateAnswer} is incorrect.`);
}*/

  let amtCorrect=0
  let grade=0;  //TODO 3.2 use this variable to calculate the candidates score.
for (i = 0; i < 5; i++) {
    if (correctAnswers[i].toLowerCase() === (candidateAnswers[i].toLowerCase())) {
        amtCorrect += 1;
    } 
grade = amtCorrect / candidateAnswers.length * 100;
}
console.log(`>>> Overall Grade: ${grade}% (${amtCorrect} of ${candidateAnswers.length} responses correct) <<<`);
if (grade >= 80) {
    console.log(`>>> Status: PASSED <<<`);
} else {
    console.log(`>>> Staus: FAILED <<<`);
}
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Nice to meet you ${candidateName}. Good luck with your quiz!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};