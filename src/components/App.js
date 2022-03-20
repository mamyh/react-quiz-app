import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./../Context/AuthContext";
import "./../styles/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";

function App() {
  // const myArr = [
  //   "banana",
  //   "comla",
  //   "anarosh",
  //   "banana",
  //   "mango",
  //   "juckFruit",
  //   "mango",
  // ];
  // const result = myArr.reduce((store, currentVale) => {
  //   return { ...store, [currentVale]: store[currentVale] || currentVale };
  //   // return { ...store, [currentVale]: 1 };
  //   // return { ...store, [currentVale]: (store[currentVale] || 0) + 1 };
  // }, {});

  return (
    <BrowserRouter>
      <AuthContext>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="login" element={<Login />} />
            <Route path="result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
