import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Userlist from "./usereducer";

const MyUser = () => {
  let alluser = useSelector((state) => state.Userlist);
  let dispatch = useDispatch();
  let [newuser, pickUser] = useState("");

  const save = () => {
    let userinfo = { type: "adduser", fullname: newuser };
    dispatch(userinfo);
    pickUser("");
  };

  const deluser = (index) => {
    let userinfo = {type:"deluser", userindex: index}
    dispatch(userinfo);
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h3 className="mb-4"> Manage User: {alluser.length} </h3>
          <p>
            Enter User Name:{" "}
            <input
              type="text"
              className="m-3"
              onChange={(obj) => pickUser(obj.target.value)}
              value={newuser}
            />
            <button className="btn btn-primary" onClick={save}>
              {" "}
              Save User{" "}
            </button>
          </p>
        </div>
      </div>
      <div className="row mt-4">
        {alluser.map((username, index) => {
          return (
            <div className="mb-4 col-lg-3" key={index}>
              <p> {username} </p>
              <button onClick={deluser.bind(this, index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyUser;
