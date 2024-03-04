import { HashRouter, Routes, Route, Link } from "react-router-dom";
// import functionName from "filename";
import Myuser from "./basic/page1.js";
import MyBook from "./basic/page2.js";
import MyCustomer from "./basic/page3.js";
import MyItem from "./basic/page4.js";
import Hook1 from "./hooks/page6.js";
import Hook2 from "./hooks/page7.js";
import Hook3 from "./hooks/page8.js";
import Hook6 from "./hooks/page9.js";
import Myapi1 from "./api/api1.js";

function App() {
  return (
    <HashRouter>
      <header>
        <Link to="/" className="toplink"> Manage User </Link>
        <Link to="/book" className="toplink"> Manage Book </Link>
        <Link to="/customer" className="toplink"> Manage Customer </Link>
        <Link to="/item" className="toplink"> Manage Item </Link>
        <Link to="/hook1" className="toplink"> Hook-1 </Link>
        <Link to="/hook2" className="toplink"> Hook-2 </Link>
        <Link to="/hook3" className="toplink"> Hook-3 </Link>
        <Link to="/hook6" className="toplink"> Hook-6 </Link>
        <Link to="/api1" className="toplink"> MyApi-1 </Link>
      </header>

      <Routes>
        <Route exact path="/" element={<Myuser />}/>
        <Route exact path="/book" element={<MyBook />}/>
        <Route exact path="/customer" element={<MyCustomer />}/>
        <Route exact path="/item" element={<MyItem />}/>
        <Route exact path="/hook1" element={<Hook1 />}/>
        <Route exact path="/hook2" element={<Hook2 />}/>
        <Route exact path="/hook3" element={<Hook3 />}/>
        <Route exact path="/hook6" element={<Hook6 />}/>
        <Route exact path="/api1" element={<Myapi1 />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;

/*
  Myuser(); - function calling in JS
  <Myuser/> - component calling in JSX 
*/
