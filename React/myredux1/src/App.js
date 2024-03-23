import { HashRouter, Routes, Route, Link } from "react-router-dom";
import MyDashboard from "./dashboard";
import MyApi from "./api";
import MyBook from "./book";
import MyProduct from "./product";
import MyUser from "./user";

function App() {
  return (
    <HashRouter>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-4">
            <h1 className="text-center text-danger">React & Redux</h1>
          </div>
          <div className="col-lg-8 text-center">
            <div className="btn-group">
              <Link to="/" className="btn btn-primary"> Dashboard </Link>
              <Link to="/user" className="btn btn-info"> Manage User </Link>
              <Link to="/product" className="btn btn-success"> Manage Product </Link>
              <Link to="/api" className="btn btn-warning"> Manage Api </Link>
              <Link to="/book" className="btn btn-secondary"> Manage Book  </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Routes>
        <Route exact path = "/user" element={<MyUser/>} />
        <Route exact path = "/product" element={<MyProduct/>} />
        <Route exact path = "/book" element={<MyBook/>} />
        <Route exact path = "/api" element={<MyApi/>} />
        <Route exact path = "/" element={<MyDashboard/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
