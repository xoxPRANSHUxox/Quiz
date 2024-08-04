import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="bg-red-100 flex justify-around w-screen p-1">
        <img src={logo} alt="image of logo" className="h-10" />
        <ul className="flex justify-center items-center p-auto text-xl m-auto">
          <li className="mr-12">
            <Link to="/">HOME</Link>
          </li>
          <li className="">
          <Link to="/MyQuiz">My Quiz</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
