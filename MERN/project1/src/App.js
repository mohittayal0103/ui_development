import { HashRouter, Routes, Route, Link } from "react-router-dom";

import ManageBook from "./book";
import ManageProduct from "./product";
import Message from "./message";

function App() {
  return (
    <HashRouter>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-danger"> MERN Stack </h2>
          </div>
          <div className="col-lg-12 text-end">
            <div className="btn-group">
              <Link className="btn btn-primary" to="/book">
                {" "}
                Book{" "}
              </Link>
              <Link className="btn btn-info" to="/product">
                {" "}
                Product{" "}
              </Link>
              <Link className="btn btn-success" to="/message">
                {" "}
                Message{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route exact path="/book" element={<ManageBook />} />
        <Route exact path="/product" element={<ManageProduct />} />
        <Route exact path="/message" element={<Message />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
