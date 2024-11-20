import axios from "axios";
import { useState, useEffect } from "react";
import "./Quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../quizData.json");
        setData(response.data); //save data to state
      } catch (error) {
        setError(error.message); //Handle errors
      } finally {
        setLoading(false); // End loading
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleNextQuestion = () => {
    if (selectedOption === data[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption("");
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Game</h1>
      {!showResult ? (
        <div>
          <h2>{data[currentQuestion].question}</h2>
          <ol>
            {data[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ol>
          <button disabled={!selectedOption} onClick={handleNextQuestion}>
            {currentQuestion === data.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      ) : (
        <div className="result">
          <h2>
            Your score: {score} out of {data.length}
          </h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
