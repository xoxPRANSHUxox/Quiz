import React from "react";
import CheckIcon from '@mui/icons-material/Check'; // Icon for indicating a correct answer
import ClearIcon from '@mui/icons-material/Clear'; // Icon for indicating an incorrect answer
import DeleteIcon from '@mui/icons-material/Delete'; // Icon for the delete button

export default function AnswerCard({ text, id, correct, onDeleteHandler }) {
  return (
    <div className="mx-2 flex flex-wrap">
      <div className="w-full p-4 bg-white border-[#B43F3F] border-[0.2rem] rounded-lg shadow m-4">
        {/* Container for the answer text and delete button */}
        <div className="flex h-auto w-auto">
          <p className="mx-4 font-sans text-wrap">{text}</p> {/* Display the answer text */}
          <button onClick={() => onDeleteHandler(id)}> {/* Trigger delete handler */}
            <DeleteIcon /> {/* Delete icon */}
          </button>
        </div>
        {/* Background color changes based on whether the answer is correct */}
        <div
          className=""
          style={{ background: `${correct ? "lightgreen" : "orange"}` }}
        >
          <div>
            {/* Display a check or clear icon based on correctness */}
            {correct ? (
              <p className="text-center">
                <CheckIcon /> {/* Correct answer icon */}
              </p>
            ) : (
              <p className="text-center">
                <ClearIcon /> {/* Incorrect answer icon */}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
