import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AnswerCard({ text, id, correct, onDeleteHandler }) { // Corrected prop name
  return (
    <div className="mx-2 flex flex-wrap">
      <div className="w-full p-4 bg-white border-[#B43F3F] border-[0.2rem] rounded-lg shadow m-4">
        <div className="flex h-auto w-auto">
          <p className="mx-4 font-sans text-wrap">{text}</p>
          <button onClick={() => onDeleteHandler(id)}>
            <DeleteIcon />
          </button>
        </div>
        <div
          className=""
          style={{ background: `${correct ? "lightgreen" : "orange"}` }}
        >
          <div>
            {correct ? (
              <p className="text-center">
                <CheckIcon />
              </p>
            ) : (
              <p className="text-center">
                <ClearIcon />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
