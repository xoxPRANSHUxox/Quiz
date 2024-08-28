import React, { useEffect, useRef, useState } from "react";
import AnswerCard from "../Ui/AnswerCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addQuiz } from "../Redux/Action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForMain() {
  // State variables to manage quiz-related data
  const [count, setCount] = useState(1); // Track the number of questions
  const [answers, setAnswers] = useState([]); // Store answers for the current question
  const [question, setQuestion] = useState([]); // Store all questions in the quiz
  const [added, setAdded] = useState(false); // Track if a question was recently added
  const [answerLength, setAnswerLength] = useState(false); // Track if answer length validation fails

  // UseEffect to manage timeouts for 'added' and 'answerLength' state changes
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (added) {
        setAdded(false); // Reset 'added' state after 1 second
      }
    }, 1000);

    const timeOut2 = setTimeout(() => {
      if (answerLength) {
        setAnswerLength(false); // Reset 'answerLength' state after 1 second
      }
    }, 1000);

    return () => {
      clearTimeout(timeOut); // Clear timeout to prevent memory leaks
      clearTimeout(timeOut2); // Clear timeout to prevent memory leaks
    };
  }, [added, answerLength]);

  // Refs for form inputs to gather user input values
  const answerRef = useRef();
  const correctRef = useRef();
  const questionRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  // Redux dispatch and navigation hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handler to add an answer option to the current question
  const addOptionHandler = (e) => {
    e.preventDefault();

    // Validation to check if the answer field is not empty
    if (answerRef.current.value === "") {
      toast.error("Answer cannot be empty");
      return;
    }

    // Allow adding up to 4 answers; show a warning if exceeded
    if (answers.length >= 4) {
      toast.warning("You can add a maximum of 4 answers");
      setAnswers((prev) => [...prev]);
    } else {
      const Answer = {
        answer: answerRef.current.value.toUpperCase(), // Convert answer to uppercase
        correct: correctRef.current.checked, // Check if this answer is marked as correct
        id: Math.random() * 10, // Generate a unique ID for the answer
      };
      setAnswers((prev) => [...prev, Answer]); // Add the answer to the answers array
    }
    answerRef.current.value = ""; // Reset answer input field
    correctRef.current.checked = false; // Reset correct checkbox
  };

  // Handler to add a new question to the quiz
  const addQuestionHandler = (e) => {
    e.preventDefault();
    
    // Validation to ensure the question and answers are not empty
    if (questionRef.current.value === "" || answers.length === 0) {
      toast.error("Question or answers cannot be empty");
      questionRef.current.value = "";
      return;
    }

    // Ensure at least 3 answers are provided before adding the question
    if (answers.length > 2) {
      const Question = {
        question: questionRef.current.value, // Question text
        answers: answers, // List of answers for this question
        id: count, // Unique ID for the question
      };

      setCount((prev) => prev + 1); // Increment the question count
      setQuestion((prev) => [...prev, Question]); // Add the question to the quiz
      setAnswers([]); // Reset answers array for the next question
      setAdded(true); // Set added state to trigger feedback
      toast.success("Question added successfully"); // Show success message
      questionRef.current.value = ""; // Reset question input field
    } else {
      toast.warning("You need to add at least 3 answers");
      setAnswerLength(true); // Trigger answer length validation feedback
    }
  };

  // Handler to delete an answer option from the list
  const onDeleteHandler = (id) => {
    const filteredArr = answers.filter((el) => el.id !== id); // Remove the selected answer
    setAnswers(filteredArr); // Update the answers array
    toast.info("Answer deleted"); // Show info message
  }

  // Handler to save the quiz after adding all questions
  const onSaveHandler = (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value; // Get the quiz title
    const descValue = descriptionRef.current.value; // Get the quiz description

    // Validation to ensure title and questions are not empty
    if (titleValue === "" || question.length <= 0) {
      toast.error("Title or questions are missing");
      return;
    }

    // Construct the Quiz object
    const Quiz = {
      title: titleValue, // Quiz title
      description: descValue, // Quiz description
      questions: question, // List of questions in the quiz
      id: Math.random(), // Generate a unique ID for the quiz
      createdOn: new Date(), // Timestamp of when the quiz was created
      isActive: true, // Flag to indicate if the quiz is active
    };

    dispatch(addQuiz(Quiz)); // Dispatch the action to add the quiz to the store

    // Reset form and state after saving the quiz
    setCount(1);
    titleRef.current.value = "";
    setQuestion([]);
    descriptionRef.current.value = "";

    toast.success("Quiz saved successfully"); // Show success message
    navigate("/PlayQuiz"); // Navigate to the PlayQuiz page
  };

  return (
    <div>
      <ToastContainer />
      <div className="form fade-in-1">
        <form className="w-auto flex flex-col border-[0.2rem] mx-[1rem]  border-[#B43F3F] rounded-2xl sm:mx-[5rem]">
          <div className="w-full flex flex-col ">
            <input
              type="text"
              placeholder="Add Title"
              name="title"
              className=" title-input border-[0.2rem] p-4 rounded-lg mx-4 my-4 border-[#B43F3F] overflow-hidden sm:mx-12"
              ref={titleRef}
            />
            <input
              type="text"
              className="border-[0.2rem] p-4 rounded-lg border-[#B43F3F] sm:mx-12 mx-4 my-4"
              placeholder="Add Description"
              ref={descriptionRef}
            />
          </div>
          <div className=" w-full flex flex-wrap">
            <input
              type="text"
              className=" w-screen overflow-hidden sm:w-3/4 sm:mx-12 mx-4 title-input border-[0.2rem] p-4 rounded-lg my-4 border-[#B43F3F]"
              ref={questionRef}
            />
            <span className="text-center m-auto mb-4">Question {count}</span>
          </div>
          <div className="flex sm:flex-row flex-col flex-wrap">
            
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
          <div className="flex flex-wrap">
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
          <div className="my-4 flex flex-wrap">
            <button
              className=" text:sm sm:text-md font-bold text-[#B43F3F] bg-white rounded-full border border-[#F8EDED] hover:bg-[#FF8225] hover:text-[#173B45]  px-4 sm:px-8 py-4 flex focus:ring-4 focus:ring-gray-100"
              onClick={addQuestionHandler}
            >
              Add question
            </button>
            <button
              className=" text-sm sm:text-md font-bold text-[#B43F3F] bg-white rounded-full border border-[#F8EDED] hover:bg-[#FF8225] hover:text-[#173B45] px-4 sm:px-8 py-4 flex focus:ring-4 focus:ring-gray-100 mx-8 "
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
