import {HashRouter, Routes, Route, Link} from "react-router-dom";
import MyCompany from "./basic/company";
import MyCity from "./basic/city";
import MyEmp from "./basic/employee";
import MyCustomer from "./basic/customer";
import Items from "./basic/item";
import Hook1 from "./hooks/hook1"

function App() {
  return (
    // <div>
    //   <MyCompany />
    //   <MyCity />
    //   <MyEmp/>
    //   <MyCustomer/>
    //   <Items/>
    // </div>

    <HashRouter>
      <header>
        <Link to="/" className="toplink">Companies</Link>
        <Link to="/city" className="toplink">Cities</Link>
        <Link to="/emp" className="toplink">Employee</Link>
        <Link to="/customer" className="toplink">Customers</Link>
        <Link to="/item" className="toplink">Items</Link>
        <Link to="/hook1" className="toplink">Hook1</Link>
      </header>
      
      <Routes>
        <Route exact path="/" element={<MyCompany/>} />
        <Route exact path="/city" element={<MyCity/>} />
        <Route exact path="/emp" element={<MyEmp/>} />
        <Route exact path="/customer" element={<MyCustomer/>} />
        <Route exact path="/item" element={<Items/>} />
        <Route exact path="/hook1" element={<Hook1/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
