import React, { useEffect, useRef, useState } from "react";
import AnswerCard from "../Ui/AnswerCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addQuiz } from "../Redux/Action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForMain() {
  const [count, setCount] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState([]);
  const [added, setAdded] = useState(false);
  const [answerLength, setAnswerLength] = useState(false);

  //  UseEffect React hook for timeOut
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (added) {
        setAdded(false);
      }
    }, 1000);

    const timeOut2 = setTimeout(() => {
      if (answerLength) {
        setAnswerLength(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeOut);
      clearTimeout(timeOut2);
    };
  }, [added, answerLength]);

  // //  All the ref for collecting user info and data
  const answerRef = useRef();
  const correctRef = useRef();
  const questionRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // There are some handlers used to get user info and update the state.

  const addOptionHandler = (e) => {
    e.preventDefault();

    if (answerRef.current.value === "") {
      toast.error("Answer cannot be empty");
      return;
    }

    if (answers.length >= 4) {
      toast.warning("You can add a maximum of 4 answers");
      setAnswers((prev) => [...prev]);
    } else {
      const Answer = {
        answer: answerRef.current.value.toUpperCase(),
        correct: correctRef.current.checked,
        id: Math.random() * 10,
      };
      setAnswers((prev) => [...prev, Answer]);
    }
    answerRef.current.value = "";
    correctRef.current.checked = false;
  };

  const addQuestionHandler = (e) => {
    e.preventDefault();
    if (questionRef.current.value === "" || answers.length === 0) {
      toast.error("Question or answers cannot be empty");
      questionRef.current.value = "";
      return;
    }
  
    if (answers.length > 2) {
      const Question = {
        question: questionRef.current.value,
        answers: answers,
        id: count,
      };

      setCount((prev) => prev + 1);
      setQuestion((prev) => [...prev, Question]);
      setAnswers([]);
      setAdded(true);
      toast.success("Question added successfully");
      questionRef.current.value = "";
    } else {
      toast.warning("You need to add at least 3 answers");
      setAnswerLength(true);
    }
  };

  const onDeleteHandler = (id) => {
    const filteredArr = answers.filter((el) => el.id !== id);
    setAnswers(filteredArr);
    toast.info("Answer deleted");
  }

  const onSaveHandler = (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const descValue = descriptionRef.current.value;

    if (titleValue === "" || question.length <= 0) {
      toast.error("Title or questions are missing");
      return;
    }
  
    const Quiz = {
      title: titleValue,
      description: descValue,
      questions: question,
      id: Math.random(),
      createdOn: new Date(),
      isActive: true,
    };

    dispatch(addQuiz(Quiz));

    setCount(1);
    titleRef.current.value = "";
    setQuestion([]);
    descriptionRef.current.value = "";

    toast.success("Quiz saved successfully");
    navigate("/PlayQuiz");
  };

  return (
    <div>
      <ToastContainer />
      <div className="form">
        <form className="w-auto flex flex-col border-[0.2rem] m-[5rem] border-[#B43F3F] rounded-2xl ">
          <div className="w-full flex flex-col">
            <input
              type="text"
              placeholder="Add Title"
              name="title"
              className=" title-input border-[0.2rem] p-4 rounded-lg mx-12 my-4 border-[#B43F3F] overflow-hidden"
              ref={titleRef}
            />
            <input
              type="text"
              className="border-[0.2rem] p-4 rounded-lg border-[#B43F3F] mx-12 my-4"
              placeholder="Add Description"
              ref={descriptionRef}
            />
          </div>
          <div className="font-medium w-full flex flex-wrap">
            <input
              type="text"
              className=" w-3/4 mx-12 title-input border-[0.2rem] p-4 rounded-lg my-4 border-[#B43F3F]"
              ref={questionRef}
            />
            <span className="text-center m-auto mb-4">Question {count}</span>
          </div>
          <div className="form-submit-answer flex flex-row">
            {answers.map((el, i) => (
              <AnswerCard
                text={el.answer}
                id={el.id}
                key={i}
                correct={el.correct}
                onDeleteHandler={onDeleteHandler}
              />
            ))}
          </div>
          <div className="">
            <input
              type="text"
              className="answer w-auto border-[0.2rem] p-2  rounded-lg"
              placeholder="answer !"
              ref={answerRef}
            />
          </div>
          <div className="check-box">
            <input type="checkbox" name="correct" id="" ref={correctRef} />
            <label htmlFor="correct"> Correct</label>
          </div>
          <button
            className="add-option border-white rounded-lg w-[30vw] h-[2.5rem] border-solid border  bg-[#ff8225] m-auto"
            onClick={addOptionHandler}
          >
            Add Options
          </button>
          <div className="my-4 flex">
            <button
              className="text-md font-bold text-[#B43F3F] bg-white rounded-full border border-[#F8EDED] hover:bg-[#FF8225] hover:text-[#173B45] px-8 py-4 flex focus:ring-4 focus:ring-gray-100"
              onClick={addQuestionHandler}
            >
              Add question
            </button>
            <button
              className="text-md font-bold text-[#B43F3F] bg-white rounded-full border border-[#F8EDED] hover:bg-[#FF8225] hover:text-[#173B45] px-8 py-4 flex focus:ring-4 focus:ring-gray-100 mx-8"
              onClick={onSaveHandler}
            >
              Save quiz 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
