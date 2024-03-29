import { useState, useEffect } from "react";

const ManageBook = () => {
  let [allbook, updateBook] = useState([]);
  let [allbook1, updateBook1] = useState([]);

  const getBook = () => {
    fetch("http://localhost:2222/booklist")
      .then((response) => response.json())
      .then((bookArray) => {
        updateBook(bookArray);
      });
  };

  const getBook1 = () => {
    fetch("http://localhost:2222/allbook")
      .then((response) => response.json())
      .then((bookArray) => {
        updateBook1(bookArray);
      });
  };

  // useEffect(() => {
  //   getBook();
  // }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <h1 align="center" className="col-lg-12 text-center mb-4"> Book List : {allbook.length}, {allbook1.length} </h1>
        <div className="col-lg-6">
        <button onClick={getBook} className="col-lg-12 text-center btn btn-primary mb-4"> First </button>
        {allbook.map((bookname, index) => {
          return (
              <label className="col-lg-3  mb-4 text-center" >
              {bookname}
            </label>
          );
        })}
        </div>

        <div className="col-lg-6">
        <button onClick={getBook1} className="col-lg-12 text-center btn btn-primary mb-4"> Second </button>
        {allbook1.map((bookname, index) => {
          return (
            <div key={index} align="center">
              <label className="col-lg-4 mb-4 text-center">{bookname.name}  </label>
              <label className="col-lg-4 mb-4 text-center">{bookname.price}  </label>
              <label className="col-lg-4 mb-4 text-center">{bookname.seller}  </label>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default ManageBook;
