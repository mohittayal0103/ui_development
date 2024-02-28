import { useState } from "react";

const Hook2 = () => {
  let [bookList, updateBook] = useState(["HTML", "CSS", "BootStrap"]);
  let [newBook, pickBook] = useState("Test Book"); 

  const save = () => {
    //let newBook = document.getElementById("xyz").value; //This is a JS code.
    //updateBook(bookList =>[...bookList, "MySql 1"]); //a = a+b
    //updateBook(bookList = [...bookList, "MySql 2"]); // ...bookList is a syntax called spread operator
    updateBook([...bookList, newBook]); //All Three Types will work same
    pickBook("");
  }

  // a = a - b;
  const deleteBook = (index) => {
    bookList.splice(index,1); // a - b
    updateBook([...bookList]); // a = a;
  } 

  return (
    <div className="container">
      <h1> Use of useState() Function : {newBook} </h1>
      <p>
        Enter Book Name: <input type="text" id="xyz" onChange={obj=>pickBook(obj.target.value)} value={newBook} />  <button onClick={save}>Save</button>
      </p>

      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Book Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{book}</td>
                <td>
                  <button onClick={deleteBook.bind(this, index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Hook2;
