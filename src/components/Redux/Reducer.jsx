import { TYPE } from "./Action";

// Initial state of the app
const initialState = {
  quiz: JSON.parse(localStorage.getItem('quiz')) || [], // Load from localStorage if available
  name: "",
  playQuiz: [],
  answers: [],
};

// Reducer containing all necessary functions to update the state
export const reducer = (state = initialState, actions) => {
  
  if (actions.type === TYPE.ADDQUIZ) {
    const updatedQuiz = [...state.quiz, actions.payload];
    localStorage.setItem('quiz', JSON.stringify(updatedQuiz)); // Store updated quiz in localStorage
    return { ...state, quiz: updatedQuiz };
  }

  if (actions.type === TYPE.TOGGLEACTIVE) {
    const findElem = state.quiz.find((el) => el.id === actions.payload);
  
    if (!findElem) return state; // Early return if findElem is undefined
  
    const filteredArr = state.quiz.filter((el) => el.id !== actions.payload);
  
    const newArr = [
      { ...findElem, isActive: !findElem.isActive },
      ...filteredArr,
    ];
    
    localStorage.setItem('quiz', JSON.stringify(newArr)); // Store updated quiz in localStorage
    return {
      ...state,
      quiz: newArr,
    };
  }
  
  if (actions.type === TYPE.DELETEQUIZ) {
    const filteredArr = state.quiz.filter((el) => el.id !== actions.payload);

    localStorage.setItem('quiz', JSON.stringify(filteredArr)); // Store updated quiz in localStorage
    return {
      ...state,
      quiz: filteredArr,
    };
  }

  if (actions.type === TYPE.GETNAME) {
    return {
      ...state,
      name: actions.payload,
    };
  }

  if (actions.type === TYPE.PLAYQUIZ) {
    const findElem = state.quiz.find((el) => el.id === actions.payload);

    return {
      ...state,
      playQuiz: findElem,
    };
  }

  if (actions.type === TYPE.GETANSWER) {
    return {
      ...state,
      answers: [...state.answers, actions.payload],
    };
  }

  if (actions.type === TYPE.RESET) {
    return {
      ...state,
      name: "",
      playQuiz: [],
      answers: [],
    };
  }

  return state;
};
