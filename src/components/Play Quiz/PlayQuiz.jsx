import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getName, playQuiz } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { ToastContainer,toast } from "react-toastify";
const QuizTitle = ({ title, id }) => {
  const selectedQuiz = useRef();

  const dispatch = useDispatch();

  const handleSelected = () => {
    const selected = selectedQuiz.current.checked;

    //  if there is no quiz selected then do nothing //
    if (!selected) {
      return;
    }

    // dispatching and choosing the quiz to be played //
    dispatch(playQuiz(id));
  };

  return (
    <div className="text-md py-4 text-[#B43F3F] bg-white rounded-full border border-[#F8EDED] hover:bg-[#FF8225] hover:text-[#173B45] px-4 flex focus:ring-4 focus:ring-gray-100">
      <input
        className="mx-2"
        type="radio"
        name="quiz"
        id={`quiz-${id}`}
        ref={selectedQuiz}
        onClick={handleSelected}
      />
      <p>{title}</p>
    </div>
  );
};

QuizTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

function PlayQuiz() {
  const name = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quiz = useSelector((state) => state.reducer.quiz);

  // this handler will handle and route us to play the quiz which has been selected //
  const getNameHandler = () => {
    // if there is no name entered then do nothing except an alert //
    if (name.current.value === "") {
      toast.info("Please Enter your name first")
      return;
    }
    
    if(quiz.length <= 0) {
      toast.error("Please! create a quiz first")
    }
    // if there exists a quiz choose the selected one and let us play that quiz with the name entered and route to the play page //
    else if (quiz.length > 0) {
      dispatch(getName(name.current.value));
      navigate("/Quiz");
    }
  };

  const emptyMsg = (
    <p style={{ color: "red" }}>
      There are Currently No Quizzes! Please create some new quizzes!
    </p>
  );

  return (
    <div className="mx-8 my-4">
      <ToastContainer/>
      <div className="p-4">
        <h1 className="text-2xl text-[#]">Your active quizes are here! Select a quiz to play</h1>

        <div className="text-2xl flex justify-center m-4">
          {quiz.length === 0
            ? emptyMsg
            : quiz
                .filter((el) => el.isActive === true)
                .map((el) => (
                  <QuizTitle className="flex" title={el.title} key={el.id} id={el.id} />
                ))}
        </div>

      </div>


      <div className="bg-[#FF8225] p-4 rounded-lg text-[#0c2228] text-xl flex text-wrap bg-[]">
           Welcome in Almabetter Quiz Website.Here are some quizes for you. We know that you are here for a brain twister.Let's play.
      </div>
       
      <div className="my-8 text-[#0c2228] text-xl flex text-wrap">
         Instructions :- 
         <ul className="px-4 my-12 list-disc">
          <li>First Select a quiz from above given quiz.</li>
          <li>If there are no active quiz. please activate a quiz from my quiz</li>
          <li>Now you can see some active quizes. Now select. </li>
          <li>you can start a quiz now. </li>
         </ul>
      </div>

      <div className="">
        <div className="text-xl my-4">
          <label className="">Enter Your Name :- </label>
          <input type="text" ref={name} className="border-[0.2rem] px-4 py-2 rounded-lg border-[#B43F3F] mx-12 my-4" />
        </div>
        
      </div>
      <div className="submit-name-btn">
        <button className="text-md font-bold text-[#B43F3F] bg-white rounded-full border border-[#F8EDED] hover:bg-[#FF8225] hover:text-[#173B45] px-8 py-4 flex focus:ring-4 focus:ring-gray-100"   onClick={getNameHandler}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default PlayQuiz;
