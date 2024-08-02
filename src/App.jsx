import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyQuiz from "./components/My Quiz/MyQuiz";
import PlayQuiz from "./components/Play Quiz/PlayQuiz";
import CreateNew from "./components/CreateNew/CreateNew";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyQuiz" element={<MyQuiz />} />
          <Route path="/CreateNew" element={<CreateNew />} />
          <Route path="/MyQuiz" element={<MyQuiz />} />
          <Route path="/PlayQuiz" element={<PlayQuiz/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
