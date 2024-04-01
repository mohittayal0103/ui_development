import { useState, useEffect } from "react";

const Message = () => {
  let [newmessage, pickMessage] = useState("");

  const save = () => {
    let url = "http://localhost:2222/savemsg";
    let data = { mymessage: newmessage };
    let postData = {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify(data),
    };
    fetch(url, postData)
    .then(response=>response.json())
    .then(info=>{
        alert(info.message);
    })
    pickMessage("");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <h1 className="text-center mb-4"> How To Post Data</h1>
          <p className="text-center">
            <textarea
              className="form-control"
              onChange={(obj) => pickMessage(obj.target.value)}
              value={newmessage}
            ></textarea>
            <button className="btn btn-primary mt-4" onClick={save}>
              {" "}
              Save{" "}
            </button>
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default Message;
