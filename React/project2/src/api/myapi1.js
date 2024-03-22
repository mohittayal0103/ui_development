import { useState, useEffect } from "react";

const Myapi1 = () => {
    let [alluser, updateUser] = useState([]);
    let [allbook, updateBook] = useState([]);
    let [allcomp, updateComp] = useState([]);
    let [allemp, updateEmp] = useState([]);

    const getBook = () => {
        fetch("book.json")
        .then(response=>response.json())
        .then(bookArray => {
            updateBook(bookArray);
        })
    }

    const getCompany = () => {
        fetch("company.json")
        .then(response=>response.json())
        .then(compArray => {
            updateComp(compArray);
        })
    }

    const getEmp = () => {
        fetch("emp.json")
        .then(response=>response.json())
        .then(empArray => {
            updateEmp(empArray);
        })
    }

    const getUser = () => {
        fetch("user.json")
        .then(response=>response.json())
        .then(userArray => {
            updateUser(userArray);
        })
    }


    return(
        <div className="container">
            <h1> HomeWork1 - API </h1>

            <div className="btn">
                <button onClick={getUser}> User List </button>
                <button onClick={getBook}> Book List </button>
                <button onClick={getCompany}> Company List </button>
                <button onClick={getEmp}> Employee List </button>
            </div>

            <fieldset>
                <legend>All Users: {alluser.length}</legend>
                {
                    alluser.map((user, index)=>{
                        return(
                            <p key={index}>{user}</p>
                        )
                    })
                }
            </fieldset>

            <fieldset>
                <legend>All Books: {allbook.length}</legend>
                {
                    allbook.map((book, index)=>{
                        return(
                            <p key={index}>{book}</p>
                        )
                    })
                }
            </fieldset>

            <fieldset>
                <legend>All Companies: {allcomp.length}</legend>
                {
                    allcomp.map((comp, index)=>{
                        return(
                            <p key={index}>{comp}</p>
                        )
                    })
                }
            </fieldset>

            <fieldset>
                <legend>All  Employees: {allemp.length}</legend>
                {
                    allemp.map((emp, index)=>{
                        return(
                            <p key={index}>{emp}</p>
                        )
                    })
                }
            </fieldset>

        </div>
    );
}

export default Myapi1;