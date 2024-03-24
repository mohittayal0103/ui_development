import { combineReducers } from "redux";

import Userlist from "./userreducer";
import Productlist from "./productreducer";

const Mainreducer = combineReducers({
    Userlist,
    Productlist,
});

export default Mainreducer;