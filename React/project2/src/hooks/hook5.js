import { useState } from "react";

const Hook5 = () => {

    let [emplist, updateEmp] = useState([
        {
            empname: "",
            empemail: "",
            empmobile: "",
            empskill: "",
          },
    ]);

    let [name, pickName] = useState("");
    let [email, pickEmail] = useState("");
    let [mobile, pickMobile] = useState("");
    let [skill, pickSkill] = useState("");
    let[edu, pickEdu] = useState("");


    const save = () => {
        updateEmp({empname:name, empemail:email, empmobile:mobile, empskill:skill})
    }


  return (
    <div className="container">
      <h1> HomeWork 5 - useState() </h1>
      <div className="container1">
        <div width="100%">
          <fieldset>
            <legend>Enter Your Details</legend>
            <p> Name:</p>
            <p>
              <input
                type="text"
                onChange={(obj) => pickName(obj.target.value)}
              />
            </p>
            <p> Email Id:</p>
            <p>
              <input
                type="text"
                onChange={(obj) => pickEmail(obj.target.value)}
              />
            </p>
            <p> Mobile No:</p>
            <p>
              <input
                type="text"
                onChange={(obj) => pickMobile(obj.target.value)}
              />
            </p>
            <p> Skills:</p>
            <p>
              <textarea
                type="text"
                onChange={(obj) => pickSkill(obj.target.value)}
              ></textarea>
            </p>
            <p> Education:</p>
            <p>
            <select onChange={ obj=>pickEdu(obj.target.value) }>
                                <option value="">Choose</option>
                                <option>MCA</option>
                                <option>BCA</option>
                                <option>M.Tech</option>
                            </select>
            </p>
            <button onClick={save}>Process</button>
          </fieldset>
        </div>
        <div width="100%">
          <div>
            <fieldset>
              <legend>Personal Details</legend>
              <p>Name: {emplist.empname}</p>
              <p>Email Id: {emplist.empemail}</p>
              <p>Mobile No: {emplist.empmobile}</p>
              <p>Education: {edu}</p>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend> Skills </legend>
              <p>{emplist.empskill}</p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hook5;
