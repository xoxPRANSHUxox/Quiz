import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="bg-red-100 flex justify-around w-screen p-1">
        <img src={logo} alt="" className="w-50 h-10" />
        <ul className="flex justify-center w-[50vh] mr-[50rem] p-auto m-auto text-xl">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
          <Link to="/MyQuiz">My Quiz</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
