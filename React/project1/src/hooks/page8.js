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

  const save = () => {
    if (indexId == -1) {
      let editEmp = {
        ename: fullname,
        city: cityname,
        slry: empsalary,
        skills: empskill,
      };

      updateEmp([...emplist, editEmp]);
      pickName("");
      pickCity("");
      pickSalary("");
      pickSkill("");
    } else {
      let newEmp = {
        ename: fullname,
        city: cityname,
        slry: empsalary,
        skills: empskill,
      };

      updateEmp([...emplist, newEmp]);
      pickName("");
      pickCity("");
      pickSalary("");
      pickSkill("");
    }
  };

  let indexId = -1;
  const editEmp = (index) => {
    indexId = index;

  };

  const deleteEmp = (index) => {
    emplist.splice(index, 1);
    updateEmp([...emplist]);
  };

  let [keyword, pickKeyword] = useState("");

  return (
    <section className="container">
      <h1> Array of Object Add, List, Delete, Update </h1>
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
        <br/>
        <input type="text" placeholder="Search Employee" onChange={obj=>pickKeyword(obj.target.value)}/>
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
            if( emp.ename.toLowerCase().match(keyword.toLowerCase()) )
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{emp.ename}</td>
                <td>{emp.city}</td>
                <td>{emp.slry}</td>
                <td>{emp.skills}</td>
                <td>
                  <button onClick={editEmp}>Edit</button>
                </td>
                <td>
                  <button onClick={deleteEmp.bind(this, index)}>Delete</button>
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
