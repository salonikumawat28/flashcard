import "../index.css";
const questions = [
  { id: 1, question: "What is the capital of France?", answer: "Paris" },
  {
    id: 2,
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
  {
    id: 3,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  { id: 4, question: "In which year did World War II end?", answer: "1945" },
  {
    id: 5,
    question: "What is the main ingredient in guacamole?",
    answer: "Avocado",
  },
  {
    id: 6,
    question: "Who developed the theory of relativity?",
    answer: "Albert Einstein",
  },
];

function Flashcards() {
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>{" "}
        </div>
      ))}
    </div>
  );
}

export default Flashcards;
