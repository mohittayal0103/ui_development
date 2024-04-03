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
        getMessage();
    })
    pickMessage("");
  };

  let [allmessage, updateMessage] = useState([]);

  const getMessage = () => {
    fetch("http://localhost:2222/messagelist")
    .then(response=>response.text())
    .then(fileData=>{
      let messageArray = fileData.split("#")
      messageArray.pop();
      updateMessage(messageArray.reverse());
    })
  }

  const deletemessage = () => {
    fetch("http://localhost:2222/clearfile")
    .then(response=>response.json())
    .then(info=>{
      alert(info.message);
      getMessage();
    })
  }

    
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
        <div className="col-lg-6 text-center ">
          <button onClick={getMessage} className="btn btn-success mt-4"> Show All Message </button>
        </div>
        <div className="col-lg-6 text-center ">
          <button onClick={deletemessage} className="btn btn-danger mt-4"> Delete All Message </button>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-8 text-center mt-5">
          <h3> Total Msg : {allmessage.length}</h3>
          {
            allmessage.map((msg, index)=>{
              return (
                <div className="mt-4 mb-4 rounded border p-3" key={index}>
                  <p>{msg}</p>
                </div>
              )
            })
          }
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default Message;
