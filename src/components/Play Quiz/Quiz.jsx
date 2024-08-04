import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnswer, reset } from "../Redux/Action";
import QuizCard from "./QuizCard";
import { useNavigate } from "react-router-dom";
import congrats from '../../images/congrats.jpeg'

export const ResultModel = ({ name }) => {
  const results = useSelector((state) => state.reducer.answers);
  const correctAnswers = results.filter((el) => el.isCorrect).length;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetQuizHandler = () => {
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col border-4 bg-white my-[5rem]  border-[#FF8225] p-6 rounded-lg h-auto items-center justify-center ">
        <img src={congrats} alt="" width={300} height={200}/>
        <p className="my-4 text-xl font-bold ">Hi! {name}</p>
        <p className="text-lg font-semibold">Your score is {correctAnswers} out of {results.length}</p>
        <button className="w-[5rem] py-4 text-[#B43F3F] bg-white rounded-2xl border-4 border-[#173B45] hover:bg-[#FF8225] hover:text-[#173B45] px-4 mt-12" onClick={resetQuizHandler}>OK</button>
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

  const nextQuestionHandler = () => {
    dispatch(getAnswer(finalAnswer));

    if (count >= quiz.length - 1) {
      setShowModal(true);
    } else {
      setCount(count + 1);
    }
  };

  const getAnswerHandler = (answer, correct, id) => {
    setFinalAnswer({ answer, isCorrect: correct, id });
  };

  const question = quiz[count].question;
  const answers = quiz[count].answers;

  return (
    <div className="flex items-center justify-center">
      {showModal ? (
        <ResultModel name={name} />
      ) : (
        <div className="text-[#173B45] min-w-[40vw] w-[70vw] bg-white text-xl p-8 my-12 rounded-xl">
          <div className="play-heading font-bold text-2xl">
            <p>Hi! {name}</p>
          </div>

          <QuizCard
            nextQuestionHandler={nextQuestionHandler}
            count={count}
            question={question}
            answers={answers}
            getAnswerHandler={getAnswerHandler}
            length={quiz.length}
            selectedId={finalAnswer.id || ""}
          />
        </div>
      )}
    </div>
  );
}

export default Quiz;
