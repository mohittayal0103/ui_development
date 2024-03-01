import { useState } from "react";
import { useAsyncError } from "react-router-dom";

const Hook3 = () => {
  let [emplist, updateEmp] = useState([
    {
      ename: "Mohit Tayal",
      city: "Bangalore",
      slry: "100000",
      skills: "HTML, CSS, JS, React",
    },
  ]);

  let [fullname, pickName] = useState("");
  let [cityname, pickCity] = useState("");
  let [empsalary, pickSalary] = useState("");
  let [empskill, pickSkill] = useState("");
  let[message, updateMessage] = useState("Enter Employee Details !");

  const save = () => {
    let newEmp = {
      ename: fullname,
      city: cityname,
      slry: empsalary,
      skills: empskill,
    };

    if (userindex != -1) {
      emplist[userindex] = newEmp;
      updateMessage(fullname+", Updated Successfully !")
      setTimeout(changeHeader, 3000);
      updateIndex(-1);
    } else {
      updateEmp([...emplist, newEmp]);
      updateMessage(fullname+", Saved Successfully !")
      setTimeout(changeHeader, 3000);
    }
    pickName("");
    pickCity("");
    pickSalary("");
    pickSkill("");
  };

  let [userindex, updateIndex] = useState(-1);

  const editEmp = (details, index) => {
    updateIndex(index);
    pickName(details.ename);
    pickCity(details.city);
    pickSalary(details.slry);
    pickSkill(details.skills);
  };

  const deleteEmp = (index, ename) => {
    emplist.splice(index, 1);
    updateEmp([...emplist]);
    updateMessage(ename+", Deleted Successfully !")
    setTimeout(changeHeader, 3000);
  };

  let [keyword, pickKeyword] = useState("");

  const changeHeader = () => {
    updateMessage("Enter Employee Details !")
  }

  return (
    <section className="container">
      <h1> Array of Object Add, List, Delete, Update </h1>
      <p align='center'> {message} </p>
      <div id="inputarea">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(obj) => pickName(obj.target.value)}
          value={fullname}
        />
        <input
          type="text"
          placeholder="Enter City"
          onChange={(obj) => pickCity(obj.target.value)}
          value={cityname}
        />
        <input
          type="text"
          placeholder="Enter Salary"
          onChange={(obj) => pickSalary(obj.target.value)}
          value={empsalary}
        />
        <input
          type="text"
          placeholder="Enter Skills"
          onChange={(obj) => pickSkill(obj.target.value)}
          value={empskill}
        />
        <button onClick={save}>Save Employee</button>
      </div>

      <p align="center">
        Total Employee : {emplist.length}
        <br />
        <input
          type="text"
          placeholder="Search Employee Name"
          onChange={(obj) => pickKeyword(obj.target.value)}
        />
      </p>

      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Employee Name</th>
            <th>City</th>
            <th>Salary</th>
            <th>Skills</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {emplist.map((emp, index) => {
            let key = keyword.toLowerCase();
            let n = emp.ename.toLowerCase();
            let c = emp.city.toLowerCase();
            let s = emp.slry.toString();
            let sk = emp.skills.toLowerCase();

            if (n.match(key) || c.match(key) || s.match(key) || sk.match(key))
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{emp.ename}</td>
                  <td>{emp.city}</td>
                  <td>{emp.slry}</td>
                  <td>{emp.skills}</td>
                  <td>
                    <button onClick={editEmp.bind(this, emp, index)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={deleteEmp.bind(this, index, emp.ename)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Hook3;
