import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnswer, resetQuiz } from "../Redux/Action";
import QuizCard from "./QuizCard";
import { useNavigate } from "react-router-dom";

export const ResultModel = ({ name }) => {
  const results = useSelector((state) => state.reducer.answers);
  const mapped = results.map((el) => el.isCorrect);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetQuizHandler = () => {
    dispatch(resetQuiz());
    navigate("/");
  };

  return (
    <div className="result-container d-flex">
      <div>
        <p>Hi! {name}</p>
        <p>
          Your score is {mapped.filter((el) => el === true).length} out of{" "}
          {mapped.length}
        </p>
      </div>
      <div className="end-game-btn d-flex">
        <button onClick={resetQuizHandler}>OK</button>
      </div>
    </div>
  );
};

function Quiz() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [finalAnswer, setFinalAnswer] = useState({});

  const quiz = useSelector((state) => state.reducer.playQuiz.questions);
  const name = useSelector((state) => state.reducer.name);

  const dispatch = useDispatch();

  // Handlers
  const nextQuestionHandler = () => {
    dispatch(getAnswer(finalAnswer));

    if (count >= quiz.length - 1) {
      setShowModal(true);
    } else {
      setCount((prev) => prev + 1);
    }
  };

  const getAnswerHandler = (answer, correct, id) => {
    const Answer = {
      answer: answer,
      isCorrect: correct,
      id: id,
    };
    setFinalAnswer(Answer);
  };

  // States and data to be shown and played
  const question = quiz[count].question;
  const answers = quiz[count].answers;

  return (
    <div className="quiz-container flex">
      <div className="play-quiz-container-name">
        <div className="play-heading">
          <p>Hi! {name}</p>
        </div>

        <QuizCard
          nextQuestionHandler={nextQuestionHandler}
          count={count}
          question={question}
          answers={answers}
          getAnswerHandler={getAnswerHandler}
          length={quiz.length}
          selectedId={finalAnswer.id ? finalAnswer.id : ""}
        />
      </div>
      {showModal && <ResultModel name={name} />}
    </div>
  );
}

export default Quiz;
