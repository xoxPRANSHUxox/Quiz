import React from "react";

const AnswerCard = ({ id, answer, correct, getAnswerHandler, selectedId }) => {
  const onclickHandler = () => {
    getAnswerHandler(answer, correct, id);
  };
  return (
    <div
      className="border mx-8 my-4 p-2 rounded-xl px-8 text-wrap w-auto h-auto"
      onClick={onclickHandler}
      style={{ background: `${selectedId === id ? "#FF8225" : ""}`}}
    >
      <span
        className=""
        style={{ background: `${selectedId === id ? "#FF8225" : ""}` }}
      ></span>
      <p>{answer}</p>
    </div>
  );
};

const QuizCard = ({
  nextQuestionHandler,
  question,
  answers,
  getAnswerHandler,
  length,
  selectedId,
  count,
}) => {
  return (
    <div className="">
      <div className="text-wrap">
        <div className="text-sm font-semibold my-2 underline underline-offset-4" >Please select only One Answer! Your Question is mentioned below</div>
        <p className="font-bold mt-8 mx-2 text-wrap h-auto w-auto"> {count + 1}. {question} </p>
      </div>

      <div className="quiz-options">
        {answers.map((el, i) => (
          <AnswerCard
            key={el.id}
            id={el.id}
            correct={el.correct}
            answer={el.answer}
            getAnswerHandler={getAnswerHandler}
            selectedId={selectedId}
          />
        ))}
      </div>

      <div className="flex justify-center items-center m-auto">
        <div className="">
          Question {count + 1} / {length}
        </div>

        <div className="next-question">
          <button className="text-[1rem] my-12 font-bold text-[#B43F3F] bg-white rounded-full border border-[#F8EDED] hover:bg-[#FF8225] hover:text-[#173B45] p-4" onClick={nextQuestionHandler}>Next Question</button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
