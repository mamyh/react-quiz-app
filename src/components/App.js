import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./../styles/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="login" element={<Login />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
