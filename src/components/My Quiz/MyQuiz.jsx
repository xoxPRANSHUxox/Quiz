import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Quizzes from './Quizzes';
import { NavLink } from 'react-router-dom';
import { deleteQuiz } from '../Redux/Action';

const Deletemodel = ({ closeModel, id }) => {
  const dispatch = useDispatch();

  const onDeleteHandler = (id) => {
    dispatch(deleteQuiz(id));
    closeModel();
  };

  return (
    <div className="fixed inset-0 flex ites-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm mt-[10rem] h-fit">
        <h2 className="text-lg font-bold mb-4">Do you want to delete this quiz?</h2>
        <p className="mb-6">Deleting this will result in losing the file permanently and is not recoverable.</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => onDeleteHandler(id)}
            className="bg-[#ff8225] text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Yes
          </button>
          <button
            onClick={closeModel}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

function MyQuiz() {
  const [model, setModel] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const quizzes = useSelector((state) => state.reducer.quiz);

  const openModel = (id) => {
    setDeleteId(id);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  return (
    <div className="w-screen">  
      <div className="w-full flex">
        <div className="w-auto flex flex-wrap font-bold text-[#B43F3F] text-md text-wrap my-8">
          <h1 className="text-3xl mx-12">My Quizzes</h1>
          <NavLink to="/CreateNew">
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-md font-medium focus:outline-none bg-white rounded-full border border-[#F8EDED] hover:bg-[#FF8225] hover:text-[#173B45] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Create New
            </button>
          </NavLink>
        </div>
      </div>
      {quizzes.length === 0 ? (
        <p className="text-[2rem] text-[#FF8225] w-auto text-center bg-white mx-12 rounded-lg p-4">Currently there are no quizzes!</p>
      ) : (
        quizzes.map((el, i) => (
          <Quizzes
            key={el.id}
            title={el.title}
            id={el.id}
            active={el.isActive}
            date={el.createdOn}
            serial={i + 1}
            openModel={openModel}
          />
        ))
      )}
      {model && <Deletemodel closeModel={closeModel} id={deleteId} />}
    </div>
  );
}

export default MyQuiz;
