
import {useState, useEffect} from 'react';
const Myuser = () =>{
    let[alluser, updateUser] = useState( [] );
    const getUser = () =>{
        fetch("http://localhost:4444/user")
        .then(response=>response.json())
        .then(userArray=>{
            updateUser(userArray);
        })
    }
    useEffect(()=>{
        getUser();
    }, []);

    const save = () =>{
        let url = "http://localhost:4444/user";
        let newuser = {
            "uname":"Ganesh",
            "umobile":"8989898989",
            "uemail":"abc@gmail.com",
            "uaddress":"Mumbai Maharashtra"
        }
        let postData = {
            headers:{'Content-Type':'application/json'},
            method:'post',
            body:JSON.stringify(newuser)
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(userinfo=>{
            alert(userinfo.fullname + " - Save Successfully !");
            getUser();
        })
    }

    return(
        <div className='container'>
            <h3 align="center"> {alluser.length} :  Total User </h3>
            <table align="left" cellPadding={10}>
                <tbody>
                    <tr>
                        <td> User Full Name </td>
                        <td> <input type="text"/></td>
                    </tr>
                    <tr>
                        <td> Mobile No </td>
                        <td> <input type="text"/></td>
                    </tr>
                    <tr>
                        <td> e-Mail Id </td>
                        <td> <input type="text"/></td>
                    </tr>
                    <tr>
                        <td> Address </td>
                        <td> <textarea rows="4" cols="30"></textarea> </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align='center'>
                            <button onClick={save}> Save User </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table align="right" cellPadding={10}>
                <thead>
                    <tr>
                        <th> Full Name </th>
                        <th> Mobile No </th>
                        <th> e-Mail </th>
                        <th> Full Address </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map((user, index)=>{
                            return(
                                <tr key={index}>
                                    <td> {user.fullname} </td>
                                    <td> {user.mobile} </td>
                                    <td> {user.email} </td>
                                    <td> {user.address} </td>
                                    <td> <button>Delete</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Myuser;