import { useState } from "react";

const Hook4 = () =>{
    let[details, updateDetails] = useState( {name:"" , email:"", mobile:"", skill:""} );
    let[fullname, pickName] = useState("");
    let[emailid, pickEmail] = useState("");
    let[mobile, pickMobile] = useState("");
    let[skill, pickSkill] = useState("");
    let[edu, pickEdu] = useState("");

    const save = () =>{
        updateDetails( {name:fullname , email:emailid, mobile:mobile, skill:skill} );
    }

    return(
        <div className="container">
            <h1> How to Update an Object </h1>
            <table align="left">
                <tbody>
                    <tr>
                        <td> Name </td>
                        <td> <input type="text" onChange={ obj=>pickName(obj.target.value) }/> </td>
                    </tr>
                    <tr>
                        <td> e-Mail </td>
                        <td> <input type="text" onChange={ obj=>pickEmail(obj.target.value) }/> </td>
                    </tr>
                    <tr>
                        <td> Mobile </td>
                        <td> <input type="text" onChange={ obj=>pickMobile(obj.target.value) }/> </td>
                    </tr>
                    <tr>
                        <td> Skills </td>
                        <td> <textarea rows="5" cols="30" onChange={ obj=>pickSkill(obj.target.value) }></textarea> </td>
                    </tr>
                    <tr>
                        <td> Education </td>
                        <td> 
                            <select onChange={ obj=>pickEdu(obj.target.value) }>
                                <option value="">Choose</option>
                                <option>MCA</option>
                                <option>BCA</option>
                                <option>M.Tech</option>
                            </select>    
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align="center">
                            <button onClick={save}> Process </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table align="right" width="400">
                <tbody>
                    <tr>
                        <td> Name </td>
                        <td> {details.name} </td>
                    </tr>
                    <tr>
                        <td> e-Mail </td>
                        <td> {details.email} </td>
                    </tr>
                    <tr>
                        <td> Mobile </td>
                        <td> {details.mobile} </td>
                    </tr>
                    <tr>
                        <td> Skills </td>
                        <td> {details.skill} </td>
                    </tr>
                    <tr>
                        <td> Education </td>
                        <td> {edu} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Hook4;