import {playQuiz, TYPE} from "./Action"

const intialState = {
    quiz: [],
    name: "",
    playQuiz: [],
    answers: [],
}

export const reducer = (state = intialState, actions ) => {
    
    if(actions.type === TYPE.ADDQUIZ) {
       return {...state, quiz: [...state.quiz,actions.payload]}
    }
    
    if(actions.type === TYPE.TOGGLEACTIVE) {
        const findElem = state.quiz.find((el) => el.id === actions.payload)
        const filteredArr = state.quiz.filter((el) => el.id !== actions.payload)

        const newArr = [
            {...findElem, isActive: !findElem.isActive},
            ...filteredArr,
        ]
    
        return {
            ...state, quiz:newArr,
        }
     };
  
     if(actions.type === TYPE.DELETEQUIZ) {
      const fiteredArr = state.quiz.filter((el) => el.id !== actions.payload);

      return {
        ...state,
        quiz:fiteredArr,
      };
    }

    if(actions.type === TYPE.GETNAME) {
     return {
        ...state,
        name: actions.payload,
     }
    }

    if(actions.type === TYPE.PLAYQUIZ) {
        const findElem = state.quiz.find((el) => el.id === actions.payload);

        return {
         ...state, 
         playQuiz: findElem,
        }
    }

    if (actions.type === TYPE.GETANSWER) {
        console.log(actions.payload);
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