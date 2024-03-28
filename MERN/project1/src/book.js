import { useState, useEffect } from "react";

const ManageBook = () => {
  let [allbook, updateBook] = useState([]);

  const getBook = () => {
    fetch("http://localhost:2222/booklist")
      .then((response) => response.json())
      .then((bookArray) => {
        updateBook(bookArray);
      });
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div>
      <h1 align="center"> Book List : {allbook.length} </h1>
      {allbook.map((bookname, index) => {
        return (
          <p align="center" key={index}>
            {bookname}
          </p>
        );
      })}
    </div>
  );
};

export default ManageBook;
