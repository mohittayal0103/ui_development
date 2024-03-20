import { combineReducers } from "redux";

import Userlist from "./usereducer";
import Booklist from "./bookreducer";
import Productlist from "./productreducer";
import Apilist from "./apireducer";

const Mainreducer = combineReducers({
  Userlist,
  Productlist,
  Apilist,
  Booklist,
});

export default Mainreducer;
