let flashcards = [
    { question: "What are the rows in a relation known as?", answer: "Tuple" },
    { question: "What does the term TCL stand for?", answer: "Transaction Control Language" },
    { question: "Which key is generally used to represent relationships between tables?", answer: "Foreign Key" }
  ];
  
  let currentCardIndex = 0;
  
  function showCard() {
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
  
    questionElement.textContent = flashcards[currentCardIndex].question;
    answerElement.textContent = '';
  }
  
  function showAnswer() {
    const answerElement = document.getElementById('answer');
    answerElement.textContent = flashcards[currentCardIndex].answer;
  }
  
  function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    showCard();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    showCard();
  
    document.getElementById('show-answer').addEventListener('click', showAnswer);
    document.getElementById('next-card').addEventListener('click', nextCard);
  });
  