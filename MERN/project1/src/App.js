import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Email from "./email";
import MyBook from "./book";

function App() {
  return (
    <HashRouter>
      <header >
        <Link to="/" className="toplink"> Book </Link>
        <Link to="/email" className="toplink"> Email </Link>
      </header>


      <Routes>
        <Route exact path="/" element={<MyBook />} />
        <Route exact path="/email" element={<Email />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
