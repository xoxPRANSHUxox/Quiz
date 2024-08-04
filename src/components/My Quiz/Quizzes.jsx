import React from "react";
import { useDispatch } from "react-redux";
import { toggleActive } from "../Redux/Action";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Quizzes({ title, serial, active, id, date, openModel }) {
  const dispatch = useDispatch();

  const ActiveHandler = (id) => {
    dispatch(toggleActive(id));
  };

  return (
    <div className="flex justify-center items-center">
      <div>{serial}</div>
      <div className="text-2xl">{title.toUpperCase()}</div>

      <div className="flex justify-center items-center w-fit">
        <button
          className="py-2.5 px-5 mx-4 text-md font-medium bg-white rounded-full border border-[#F8EDED] hover:bg-[#FF8225] hover:text-[#173B45] focus:z-10   dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => ActiveHandler(id)}
        >
          {active ? <ThumbUpAltIcon /> : <ThumbDownOffAltIcon />}
        </button>
        <p>{active ? "Active" : "Inactive"}</p>
      </div>

      <button
        style={{ backgroundColor: `${active ? "gree" : "grey"}` }}
      ></button>

      {/* <div>{`${date.getMonth}/${date.getFullYear}`}</div> */}

      <div className="delete icon">
        <button
          className="py-2.5 px-5 mx-4 text-md font-medium bg-white rounded-full border border-[#F8EDED] hover:bg-[#FF8225] hover:text-[#173B45] focus:z-10   dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => openModel(id)}
        >
          <DeleteOutlineIcon />
        </button>
      </div>
    </div>
  );
}

export default Quizzes;
