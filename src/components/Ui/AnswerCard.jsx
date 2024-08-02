import React from "react";
export default function AnswerCard({ text, id, correct, onDeleteHaadnler }) {
  return (
    <div className="w-full">
      <div className=" w-fit p-4 bg-white border-[#B43F3F] border-[0.2rem]  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4">
        <div className="flex">
          <p className="mx-4 font-sans ">{text}</p>
          <button onClick={() => onDeleteHaadnler(id)}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>

        <div
          className=""
          style={{ background: `${correct ? "lightgreen" : "orange"}` }}
        >
          <div>
            {correct ? (
              <p className="text-center">
                <i className="fa-solid fa-circle-check"></i>
              </p>
            ) : (
              <p className="text-center">
                <i className="fa-solid fa-circle-xmark"></i>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
