import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

//Componrnts
import QuestionCard from "./components/QueastionCard";

//API
import { fetchQuizQuestions } from "./API";

//Types
import { Difficulty, QuestionState } from "./API";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTION = 10;

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY));
  console.log("Question ---> ", questions);

  const startIrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTION,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswer.length === TOTAL_QUESTION ? (
        <button className="start" onClick={startIrivia}>
          Start Quiz
        </button>
      ) : null}
      {!gameOver ? <p className="score">Score: </p> : null}
      {loading && <p>Loading Question ...</p>}
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTION}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button className="next">Next .. Question</button>
    </div>
  );
};

export default App;
