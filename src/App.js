import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
