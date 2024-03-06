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
let[empname, pickName] = useState("");
let[empcity, pickCity] = useState("");
let[empsalary, pickSalary] = useState("");
let[empskill, pickSkill] = useState("");


const save = () => {
    let url = "http://localhost:1234/emplist";
    let newEmp = {
        name: empname,
        city: empcity,
        salary: empsalary,
        skill: empskill
    }
    let postData = {
        headers:{'Content-Type':'application/json'},
        method: 'post',
        body: JSON.stringify(newEmp)
    }

    fetch(url, postData)
    .then(response=>response.json())
    .then(empinfo=>{
        getEmp(); //callback to reload the list
        pickName("");
        pickCity("");
        pickSalary("");
        pickSkill("");
    })
}

//Edit Employee
const edit = () => {

}

//Delete Employee
const deleteEmp = (index) => {
    let url = "http://localhost:1234/emplist"

    allemp.splice(index,1);
    updateEmpList([...allemp]);
}

//Search Employee
let[keyword, pickKeyword] = useState("")


  return (
    <div className="contianer">
      <h1>Manage Employee</h1>


      <p align='center'> Enter Employee Details! </p>
      <div id="inputarea">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(obj)=>pickName(obj.target.value)}
          value={empname}
        />
        <input
          type="text"
          placeholder="Enter City"
          onChange={(obj)=>pickCity(obj.target.value)}
          value={empcity}
        />
        <input
          type="text"
          placeholder="Enter Salary"
          onChange={(obj)=>pickSalary(obj.target.value)}
          value={empsalary}
        />
        <input
          type="text"
          placeholder="Enter Skills"
          onChange={(obj)=>pickSkill(obj.target.value)}
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
            if((emp.name.toLowerCase()).match(keyword.toLowerCase()))
            return (
              <tr key={index}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.city}</td>
                <td>{emp.salary}</td>
                <td>{emp.skill}</td>
                <td><button onClick={edit}>Edit</button></td>
                <td><button onClick={deleteEmp.bind(this, index)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
