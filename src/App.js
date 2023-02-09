import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ResultsInfo from "./pages/ResultsInfo";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/results/:id" element={<ResultsInfo />} />
      </Routes>
    </>
  );
}

export default App;
