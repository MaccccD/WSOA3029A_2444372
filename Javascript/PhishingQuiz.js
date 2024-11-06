const quizQuestions = [
    {
   question: "How do you spot a fake URL used for Phishing purposes ?",
   choices: [

    {text: "a). You check the URL's protocol as well as its domain name.", isCorrect: true},
    {text: "b). You check the URLs text color. If it turns blue then it is legit.", isCorrect: false},
    {text: "c). You copy and paste it to your browser to test it out so you can know for sure.", isCorrect: false},
    {text: "d). You rely on your  scan ability to determine whether it is it legit or not.", isCorrect: false},

   ],
   feedback: "Always check that the URLs belongs to an actual site:)"
},
{
 question: "Based on what you've learnt from the visualization, which of the following URLS seems legitimate?",
 choices: [

    {text: "https://secure-paypal.com", isCorrect: false },
    {text: "https://paypal.com", isCorrect: true},
    {text: "https://paypal-security.com", isCorrect: false},
    {text: "http://paypal-login", isCorrect: false}
 ],
 feedback: "Always validate the accuracy of the protocol as well as the domain  name before clicking the actual link:)"
}
    ];

    let currentQuestion = 0;

    function displayQuizQuestions(){
      const questionE1 = document.getElementById("question");
      const choicesE1 = document.getElementById("choices");
      const feedbackE1 = document.getElementById("feedback");

      //clearing out feedback fiedls:
      feedbackE1.textContent = "";
      choicesE1.innerHTML = "";

      //display the currentquestion :
      questionE1.textContent = quizQuestions[currentQuestion].question;

      //Show the MCQ options:
      quizQuestions[currentQuestion].choices.forEach((choice)=> {
        const btn = document.createElement("button");
        btn.textContent = choice.text;
        btn.onclick = () => checkAnswer(choice.isCorrect, quizQuestions[currentQuestion].feedback);
        choicesE1.appendChild(btn);
      });

    }
      function checkAnswer(isCorrect, feedback){
        const feedbackE1 = document.getElementById("feedback");
        feedbackE1.textContent = isCorrect ? "Correct!" : `Incorrect. ${feedback}`;
      }
    
    function nextQuestion() {
        currentQuestion ++;
        if(currentQuestion< quizQuestions.length){
            displayQuizQuestions();
        }
        else{
            document.getElementById("phishing-quiz").innerHTML = `<p>Quizz Completed! Thank your for participating and I hope you learnt something new:)`;
        }
      }
    //show first Q:
    displayQuizQuestions();