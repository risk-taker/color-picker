import "./App.css";
import { Routes, Route } from "react-router-dom";
import Colors from "./pages/colors/Colors";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Colors />}></Route>
      </Routes>
    </>
  );
}

export default App;
