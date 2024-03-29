import { HashRouter, Routes, Route, Link } from "react-router-dom";

import ManageBook from "./book";
import ManageProduct from "./product";

function App() {
  return (
    <HashRouter>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-danger"> MERN Stack </h2>
          </div>
          <div className="col-lg-11 text-end">
            <div className="btn-group">
              <Link className="btn btn-primary" to="/book">
                {" "}
                Book{" "}
              </Link>
              <Link className="btn btn-info" to="/product">
                {" "}
                Product{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route exact path="/book" element={<ManageBook />} />
        <Route exact path="/product" element={<ManageProduct />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
