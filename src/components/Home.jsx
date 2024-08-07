import React from "react";
import Img1 from "../images/start quiz.jpeg";
import Img2 from "../images/my quiz.jpeg";
import Img3 from "../images/play quiz.jpeg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="h-[90vh] w-[100vw]">
      <section className="flex justify-center items-center h-[90vh] w-[100vw] flex-wrap fade-in-HalfSec">

        <Link to="/CreateNew">
          <div className="flex justify-center items-center rounded-md w-5/6 max-w-[25rem]  z-0 box-border container m-4">
            <h1 className="absolute text-5xl z-10 font-serif">Create Quiz</h1>
            <img
              src={Img1}
              alt="image of create quiz"
              className="opacity-70"
            />
          </div>
        </Link>

        <Link to="/MyQuiz">
          <div className="flex justify-center items-center rounded-md w-5/6 max-w-[25rem] z-0 box-border container m-4">
            <h1 className="absolute text-5xl z-10 font-serif">My Quiz</h1>
            <img
              src={Img2}
              alt="image of my quiz"
              className="opacity-70"
            />
          </div>
        </Link>
        <Link to="/PlayQuiz">
          <div className="flex justify-center items-center rounded-md w-5/6 max-w-[25rem] z-0 box-border container m-4">
            <h1 className="absolute text-5xl z-10 font-serif">Play Quiz</h1>
            <img
              src={Img3}
              alt="image of play quiz"
              className="opacity-60 z-0"
            />
          </div>
        </Link>
      </section>
    </div>
  );
}

export default Home;
