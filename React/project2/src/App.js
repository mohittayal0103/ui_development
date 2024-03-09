import {HashRouter, Routes, Route, Link} from "react-router-dom";
import MyCompany from "./basic/company";
import MyCity from "./basic/city";
import MyEmp from "./basic/employee";
import MyCustomer from "./basic/customer";
import Items from "./basic/item";
import Hook1 from "./hooks/hook1";
import Hook2 from "./hooks/hook2";
import Hook3 from "./hooks/hook3";
import Hook4 from "./hooks/hook4";
import Hook5 from "./hooks/hook5";
import Hook6 from "./hooks/hook6";
import Myapi1 from "./api/myapi1";
import Myapi2 from "./api/myapi2";
import Myapi3 from "./api/myapi3";

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
        <Link to="/hook2" className="toplink">Hook2</Link>
        <Link to="/hook3" className="toplink">Hook3</Link>
        <br/><br/>
        <Link to="/hook4" className="toplink">Hook4</Link>
        <Link to="/hook5" className="toplink">Hook5</Link>
        <Link to="/hook6" className="toplink">Hook6</Link>
        <Link to="/myapi1" className="toplink">MyApi1</Link>
        <Link to="/myapi2" className="toplink">MyApi2</Link>
        <Link to="/myapi3" className="toplink">MyApi3</Link>
      </header>
      
      <Routes>
        <Route exact path="/" element={<MyCompany/>} />
        <Route exact path="/city" element={<MyCity/>} />
        <Route exact path="/emp" element={<MyEmp/>} />
        <Route exact path="/customer" element={<MyCustomer/>} />
        <Route exact path="/item" element={<Items/>} />
        <Route exact path="/hook1" element={<Hook1/>} />
        <Route exact path="/hook2" element={<Hook2/>} />
        <Route exact path="/hook3" element={<Hook3/>} />
        <Route exact path="/hook4" element={<Hook4/>} />
        <Route exact path="/hook5" element={<Hook5/>} />
        <Route exact path="/hook6" element={<Hook6/>} />
        <Route exact path="/myapi1" element={<Myapi1/>} />
        <Route exact path="/myapi2" element={<Myapi2/>} />
        <Route exact path="/myapi3" element={<Myapi3/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;