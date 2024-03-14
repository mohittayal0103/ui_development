import { useState } from "react";

const ContactUs = () => {
    let[fullname, pickName] = useState("");
    let[nameerror, updateNameError] = useState("");

    let[mobile, pickMobile] = useState("");
    let[mobileerror, updateMobError] = useState("");

    let[email, pickEmail] = useState("");
    let[emailerror, updateEmailError] = useState("");


    const save = () => {
        let formStatus = true;
        //name validation
        if(fullname==""){
            updateNameError("Invalid Name !");
            formStatus = false;
        }else{
            updateNameError("");
        }
        //mobile no validation
        var mpattern = /^[0]?[6789]\d{9}$/
        if( !mpattern.test(mobile) ){
            updateMobError("Invalid Mobile !");
            formStatus = false;
        }else{
            updateMobError("");
        }
        //email validation
        var epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if(!epattern.test(email)){
            updateEmailError("Invalid Email Id !");
            formStatus = false;
        }else{
            updateEmailError("");
        }
    }

  return (
    <div className="container">
      <h1> Contact Us </h1>
      <table align="center">
        <tbody>
          <tr>
            <th>Full Name: </th>
            <td>
              <input type="text" onChange={obj=>pickName(obj.target.value)} /> {nameerror}
            </td>
          </tr>
          <tr>
            <th>Email Id: </th>
            <td>
              <input type="email" onChange={obj=>pickEmail(obj.target.value)} /> {emailerror}
            </td>
          </tr>
          <tr>
            <th>Mobile No: </th>
            <td>
              <input type="number" onChange={obj=>pickMobile(obj.target.value)} /> {mobileerror}
            </td>
          </tr>
          <tr>
            <th>City </th>
            <td>
              <select>
                <option value=""> Choose City</option>
                <option> Bangalore </option>
                <option> Mumbai </option>
                <option> Pune </option>
              </select>
            </td>
          </tr>
          <tr>
            <th>Message </th>
            <td>
              <textarea rows="7" cols="35" maxLength={200}></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="center">
              <button onClick={save}> Submit </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactUs;
