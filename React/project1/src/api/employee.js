import { useState, useEffect } from "react";

const Employee = () => {
  let [allemp, updateEmpList] = useState([]);
  

  const getEmp = () => {
    fetch("http://localhost:1234/emplist")
      .then((response) => response.json())
      .then((empArray) => {
        updateEmpList(empArray);
      });
  };



  useEffect(() => {
    getEmp();
  }, []);


  //Save Employee
  let [empname, pickName] = useState("");
  let [empcity, pickCity] = useState("");
  let [empsalary, pickSalary] = useState("");
  let [empskill, pickSkill] = useState("");

  const save = () => {
    if (empid == "") {
      let url = "http://localhost:1234/emplist";
      let newEmp = {
        name: empname,
        city: empcity,
        salary: empsalary,
        skill: empskill,
      };
      let postData = {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify(newEmp),
      };

      fetch(url, postData)
        .then((response) => response.json())
        .then((empinfo) => {
          getEmp(); //callback to reload the list
          pickName("");
          pickCity("");
          pickSalary("");
          pickSkill("");
        });
    }else{
      let url = "http://localhost:1234/emplist/"+empid;
      let newEmp = {
        name: empname,
        city: empcity,
        salary: empsalary,
        skill: empskill,
      };
      let postData = {
        headers: { "Content-Type": "application/json" },
        method: "put",
        body: JSON.stringify(newEmp),
      };

      fetch(url, postData)
        .then((response) => response.json())
        .then((empinfo) => {
          getEmp(); //callback to reload the list
          pickName("");
          pickCity("");
          pickSalary("");
          pickSkill("");
          updateId("");
        });
    }
  };

  //Edit Employee
  let [empid, updateId] = useState("");
  const edit = (empdata) => {
    updateId(empdata.id);

    pickName(empdata.name);
    pickCity(empdata.city);
    pickSalary(empdata.salary);
    pickSkill(empdata.skill);
  };

  //Delete Employee
  const deleteEmp = (empid) => {
    let url = "http://localhost:1234/emplist/" + empid;
    let postData = { method: "delete" };
    fetch(url, postData)
      .then((response) => response.json())
      .then((empDelete) => {
        getEmp();
      });
  };

  //Search Employee
  let [keyword, pickKeyword] = useState("");


  return (
    <div className="contianer">
      <h1>Manage Employee</h1>

      <p align="center"> Enter Employee Details! </p>
      <div id="inputarea">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(obj) => pickName(obj.target.value)}
          value={empname}
        />
        <input
          type="text"
          placeholder="Enter City"
          onChange={(obj) => pickCity(obj.target.value)}
          value={empcity}
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
        Total Employee : {allemp.length}
        <br />
        <input
          type="text"
          placeholder="Search Employee Name"
          onChange={(obj) => pickKeyword(obj.target.value)}
        />
      </p>

      <table align="center">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>City</th>
            <th>Salary</th>
            <th>Skill</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allemp.map((emp, index) => {
            if (emp.name.toLowerCase().match(keyword.toLowerCase()))
              return (
                <tr key={index}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.city}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.skill}</td>
                  <td>
                    <button onClick={edit.bind(this, emp)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={deleteEmp.bind(this, emp.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
