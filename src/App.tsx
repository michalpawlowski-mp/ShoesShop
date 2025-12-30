import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ShoePage from "./components/ShoePage/ShoePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:brand/:model" element={<ShoePage />} />
      </Routes>
    </>
  );
}

export default App;
