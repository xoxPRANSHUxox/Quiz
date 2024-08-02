export const TYPE = {
    ADDQUIZ: 'ADDQUIZ',
    TOGGLEACTIVE: 'TOGGLEACTIVE',
    DELETEQUIZ: 'DELETEQUIZ',
    GETNAME: 'GETNAME',
    PLAYQUIZ: 'PLAYQUIZ',
    GETANSWER: 'GETANSWER',
    RESET: 'RESET',
};

export const addQuiz = (quiz) => ({
    type: TYPE.ADDQUIZ,
    payload: quiz,
});

export const toggleActive = (id) => ({
    type: TYPE.TOGGLEACTIVE,
    payload: id,
});

export const deleteQuiz = (id) => ({
    type: TYPE.DELETEQUIZ,
    payload: id,
});

export const getName = (name) => ({
    type: TYPE.GETNAME,
    payload: name,
});

export const playQuiz = (id) => ({
    type: TYPE.PLAYQUIZ,
    payload: id,
});

export const getAnswer = (answer) => ({
    type: TYPE.GETANSWER,
    payload: answer,
});

export const reset = () => ({
    type: TYPE.RESET,
});
