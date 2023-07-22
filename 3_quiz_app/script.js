


  const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "London", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false },
        { text: "Berlin", correct: false }
      ]
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false }
      ]
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Pablo Picasso", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Vincent van Gogh", correct: false },
        { text: "Michelangelo", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for water?",
      answers: [
        { text: "Wo", correct: false },
        { text: "Ag", correct: false },
        { text: "H2O", correct: true },
        { text: "He", correct: false }
      ]
    },
    {
      question: "Which planet is known as the \"Red Planet\"?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mercury", correct: false },
        { text: "Mars", correct: true },
        { text: "Uranus", correct: false }
      ]
    },
    {
      question: "Who wrote the play \"Romeo and Juliet\"?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Charles Dickens", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "Mark Twain", correct: false }
      ]
    },
    {
      question: "What is the tallest mountain in the world?",
      answers: [
        { text: "Mount Kilimanjaro", correct: false },
        { text: "Mount Everest", correct: true },
        { text: "Mount McKinley", correct: false },
        { text: "Mount Fuji", correct: false }
      ]
    },
    {
      question: "What gas do plants absorb during photosynthesis?",
      answers: [
        { text: "Carbon dioxide (CO2)", correct: true },
        { text: "Oxygen (O2)", correct: false },
        { text: "Nitrogen (N2)", correct: false },
        { text: "Helium (He)", correct: false }
      ]
    },
    {
      question: "Which scientist developed the theory of general relativity?",
      answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Galileo Galilei", correct: false },
        { text: "Marie Curie", correct: false }
      ]
    },
    {
      question: "What is the symbol for the element gold on the periodic table?",
      answers: [
        { text: "Go", correct: false },
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Gd", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for iron?",
      answers: [
        { text: "Ir", correct: false },
        { text: "Fe", correct: true },
        { text: "Au", correct: false },
        { text: "Ag", correct: false }
      ]
    },
    {
      question: "Which famous scientist developed the theory of relativity?",
      answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Galileo Galilei", correct: false },
        { text: "Marie Curie", correct: false }
      ]
    },
    {
      question: "What is the largest species of shark?",
      answers: [
        { text: "Great White Shark", correct: true },
        { text: "Tiger Shark", correct: false },
        { text: "Hammerhead Shark", correct: false },
        { text: "Whale Shark", correct: false }
      ]
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { text: "China", correct: false },
        { text: "Japan", correct: true },
        { text: "South Korea", correct: false },
        { text: "Thailand", correct: false }
      ]
    },
    {
      question: "What is the tallest mammal in the world?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: true },
        { text: "Kangaroo", correct: false },
        { text: "Rhino", correct: false }
      ]
    },
    {
      question: "What is the largest moon in our solar system?",
      answers: [
        { text: "Ganymede", correct: true },
        { text: "Titan", correct: false },
        { text: "Europa", correct: false },
        { text: "Luna", correct: false }
      ]
    },
    {
      question: "Which famous artist painted the ceiling of the Sistine Chapel?",
      answers: [
        { text: "Leonardo da Vinci", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Vincent van Gogh", correct: false },
        { text: "Michelangelo", correct: true }
      ]
    },
    {
      question: "What is the currency of Japan?",
      answers: [
        { text: "Yen", correct: true },
        { text: "Dollar", correct: false },
        { text: "Euro", correct: false },
        { text: "Pound", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Mercury", correct: false },
        { text: "Neptune", correct: false }
      ]
    },
    {
      question: "Who is the author of the Harry Potter book series?",
      answers: [
        { text: "J.R.R. Tolkien", correct: false },
        { text: "J.K. Rowling", correct: true },
        { text: "C.S. Lewis", correct: false },
        { text: "Stephen King", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for sodium?",
      answers: [
        { text: "Na", correct: true },
        { text: "So", correct: false },
        { text: "Sn", correct: false },
        { text: "Mg", correct: false }
      ]
    },
    {
      question: "Which continent is known as the 'Dark Continent'?",
      answers: [
        { text: "Africa", correct: true },
        { text: "Antarctica", correct: false },
        { text: "Asia", correct: false },
        { text: "Australia", correct: false }
      ]
    },
    {
      question: "Who is often referred to as the 'Father of Physics'?",
      answers: [
        { text: "Galileo Galilei", correct: false },
        { text: "Isaac Newton", correct: false },
        { text: "Albert Einstein", correct: false },
        { text: "Sir Isaac Newton", correct: true }
      ]
    },
    {
      question: "Which two elements combine to form water?",
      answers: [
        { text: "Hydrogen and Oxygen", correct: true },
        { text: "Hydrogen and Nitrogen", correct: false },
        { text: "Oxygen and Carbon", correct: false },
        { text: "Carbon and Nitrogen", correct: false }
      ]
    },
    {
      question: "What is the largest desert in the world?",
      answers: [
        { text: "Sahara Desert", correct: true },
        { text: "Gobi Desert", correct: false },
        { text: "Arabian Desert", correct: false },
        { text: "Mojave Desert", correct: false }
      ]
    },
    {
      question: "Who painted the famous artwork 'Starry Night'?",
      answers: [
        { text: "Vincent van Gogh", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Leonardo da Vinci", correct: false },
        { text: "Claude Monet", correct: false }
      ]
    },
    {
      question: "What is the currency of the United Kingdom?",
      answers: [
        { text: "Euro", correct: false },
        { text: "Pound Sterling", correct: true },
        { text: "Dollar", correct: false },
        { text: "Yen", correct: false }
      ]
    },
    {
      question: "What is the symbol for the element potassium on the periodic table?",
      answers: [
        { text: "P", correct: false },
        { text: "K", correct: true },
        { text: "Po", correct: false },
        { text: "Pt", correct: false }
      ]
    },
    {
      question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
      answers: [
        { text: "Venus", correct: true },
        { text: "Mars", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false }
      ]
    },
    {
      question: "Who wrote the famous play 'Hamlet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "George Orwell", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "Charles Dickens", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for silver?",
      answers: [
        { text: "Si", correct: false },
        { text: "Ag", correct: true },
        { text: "Au", correct: false },
        { text: "Sr", correct: false }
      ]
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Pacific Ocean", correct: true }
      ]
    },
    {
      question: "Who is the author of the play 'Romeo and Juliet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Emily Bronte", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "Charles Dickens", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for carbon?",
      answers: [
        { text: "Ca", correct: false },
        { text: "Co", correct: false },
        { text: "C", correct: true },
        { text: "Cr", correct: false }
      ]
    },
    {
      question: "What is the tallest tree species in the world?",
      answers: [
        { text: "Redwood", correct: true },
        { text: "Sequoia", correct: false },
        { text: "Oak", correct: false },
        { text: "Pine", correct: false }
      ]
    },
    {
      question: "Which famous scientist formulated the laws of motion and universal gravitation?",
      answers: [
        { text: "Albert Einstein", correct: false },
        { text: "Isaac Newton", correct: true },
        { text: "Galileo Galilei", correct: false },
        { text: "Marie Curie", correct: false }
      ]
    },
    {
      question: "Which planet is known as the 'Blue Planet'?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Earth", correct: true },
        { text: "Mars", correct: false },
        { text: "Neptune", correct: false }
      ]
    },
    {
      question: "What is the currency of the United States?",
      answers: [
        { text: "Dollar", correct: true },
        { text: "Euro", correct: false },
        { text: "Pound Sterling", correct: false },
        { text: "Yen", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Go", correct: false },
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Gd", correct: false }
      ]
    },
    {
      question: "Who is the author of the book 'To Kill a Mockingbird'?",
      answers: [
        { text: "Mark Twain", correct: false },
        { text: "Harper Lee", correct: true },
        { text: "J.K. Rowling", correct: false },
        { text: "J.R.R. Tolkien", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for oxygen?",
      answers: [
        { text: "O", correct: true },
        { text: "Ox", correct: false },
        { text: "O2", correct: false },
        { text: "Om", correct: false }
      ]
    },
    {
      question: "What is the largest species of penguin?",
      answers: [
        { text: "King Penguin", correct: false },
        { text: "Emperor Penguin", correct: true },
        { text: "Adelie Penguin", correct: false },
        { text: "Gentoo Penguin", correct: false }
      ]
    },
    {
      question: "Who painted the famous artwork 'The Last Supper'?",
      answers: [
        { text: "Leonardo da Vinci", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Vincent van Gogh", correct: false },
        { text: "Claude Monet", correct: false }
      ]
    },
    {
      question: "What is the currency of China?",
      answers: [
        { text: "Yuan", correct: true },
        { text: "Dollar", correct: false },
        { text: "Euro", correct: false },
        { text: "Pound", correct: false }
      ]
    },
    {
      question: "Which planet is known as the 'Giant Planet'?",
      answers: [
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false },
        { text: "Uranus", correct: false },
        { text: "Neptune", correct: false }
      ]
    },
    {
      question: "Who wrote the famous play 'Macbeth'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "George Orwell", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "Charles Dickens", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for helium?",
      answers: [
        { text: "He", correct: true },
        { text: "H", correct: false },
        { text: "Ha", correct: false },
        { text: "Hu", correct: false }
      ]
    },
    {
      question: "What is the tallest waterfall in the world?",
      answers: [
        { text: "Niagara Falls", correct: false },
        { text: "Angel Falls", correct: true },
        { text: "Victoria Falls", correct: false },
        { text: "Iguazu Falls", correct: false }
      ]
    },
    {
      question: "Who is the author of the book 'Pride and Prejudice'?",
      answers: [
        { text: "William Shakespeare", correct: false },
        { text: "George Orwell", correct: false },
        { text: "Jane Austen", correct: true },
        { text: "Charles Dickens", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for nitrogen?",
      answers: [
        { text: "N", correct: true },
        { text: "Ni", correct: false },
        { text: "Na", correct: false },
        { text: "Ne", correct: false }
      ]
    },
  ]
  
  

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer_buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startquiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next"
        showQuestion();
    }
  const showQuestion = () => {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

  }

const resetState = () => {
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else {
    selectedBtn.classList.add("incorrect")
  }

  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  })
  nextButton.style.display = "block";
}

const showScore = () => {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of the ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block"
}

const handleNextButton = () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else {
    startquiz();
  }
})


  startquiz();