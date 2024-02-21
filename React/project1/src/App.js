// import functionName from "filename";
import Myuser from "./basic/page1.js";
import MyBook from "./basic/page2.js";
import MyCustomer from "./basic/page3.js";

function App() {
  return (
    <section>
      <Myuser />
      <MyBook />
      <MyCustomer />
    </section>
  );
}

export default App;

/*
  Myuser(); - function calling in JS
  <Myuser/> - component calling in JSX 
*/
