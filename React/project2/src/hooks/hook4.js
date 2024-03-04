import { useState } from "react";

const Hook4 = () => {
    let [emplist, updateEmp] = useState([
        {
            empname: "Mohit Tayal",
            empemail: "mohittayal@gmail.com",
            empmobile: "9999999999",
            empskill: "HTML, CSS, JS, React",
          },
    ]);

    let [name, pickName] = useState("");
    let [email, pickEmail] = useState("");
    let [mobile, pickMobile] = useState("");
    let [skill, pickSkill] = useState("");

    let [userindex, updateIndex] = useState(-1);

    const save = () => {
        let newEmp = {
          empname: name,
          empemail: email,
          empmobile: mobile,
          empskill: skill
        };
    
        if (userindex != -1) {
          emplist[userindex] = newEmp;
          updateIndex(-1);
        } else {
          updateEmp([...emplist, newEmp]);
        }
        pickName("");
        pickEmail("");
        pickMobile("");
        pickSkill("");
      };

      const editEmp = (details, index) => {
        updateIndex(index);
        pickName(details.empname);
        pickEmail(details.empemail);
        pickMobile(details.empmobile);
        pickSkill(details.empskill);
      };

      const deleteEmp = (index, empname) => {
        emplist.splice(index, 1);
        updateEmp([...emplist]);
      };





  return (
    <div className="container">
      <h1> HomeWork 4 - useState() </h1>
      <div className="container1">
      <div width="100%">
        <fieldset>
          <legend>Enter Your Details</legend>
          <p> Name:</p>
          <p>
            <input type="text" onChange={(obj) => pickName(obj.target.value)} value={name} />
          </p>
          <p> Email Id:</p>
          <p>
            <input type="text" onChange={(obj) => pickEmail(obj.target.value)} value={email} />
          </p>
          <p> Mobile No:</p>
          <p>
            <input type="text" onChange={(obj) => pickMobile(obj.target.value)} value={mobile} />
          </p>
          <p> Skills:</p>
          <p>
            <textarea type="text"  onChange={(obj) => pickSkill(obj.target.value)} value={skill} ></textarea>
          </p>
          <button onClick={save}>Save</button>
        </fieldset>
      </div>
      <div width="100%">
        <div>
            <fieldset>
                <legend>Personal Details</legend>
                {
                    emplist.map((emp, index) => {
                        if(index == emplist.length-1)
                        return(
                            <div key={index}>
                                <p>Name: {emp.empname}</p>
                                <p>Email id: {emp.empemail}</p>
                                <p>Mobile No: {emp.empmobile}</p>
                            </div>
                        );
                    })
                }
            </fieldset>
        </div>
        <div>
            <fieldset>
                <legend> Skills </legend>
                {
                    emplist.map((emp, index)=>{
                        if(index == emplist.length-1)
                        return(
                            <div key={index}>
                                <p>{emp.empskill}</p>
                            </div>
                        )
                    })
                }
            </fieldset>
        </div>
      </div>
      </div>
      <br/><br/>
      <table align="center">
        <thead>
            <tr>
                <th>Name</th>
                <th>Emal Id</th>
                <th>Mobile No.</th>
                <th>Skills</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                emplist.map((emp, index) => {
                    return(
                        <tr key={index}>
                            <td>{emp.empname}</td>
                            <td>{emp.empemail}</td>
                            <td>{emp.empmobile}</td>
                            <td>{emp.empskill}</td>
                            <td>
                                <button onClick={editEmp.bind(this, emp, index)}>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button onClick={deleteEmp.bind(this, index, emp.empname)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default Hook4;
