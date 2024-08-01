import { useEffect, useState } from "react";

const MyBook = () => {
  let [userlist, updateUser] = useState([]);
  let [booklist, updateBook] = useState([]);

  const getUser = () => {
    fetch("http://localhost:2222/userlist")
      .then((response) => response.json())
      .then((userArray) => {
        updateUser(userArray);
      });
  };

  const getBook = () => {
    fetch("http://localhost:2222/booklist")
      .then((response) => response.json())
      .then((bookArray) => {
        updateBook(bookArray);
      });
  };

  useEffect(() => {
    getUser();
    getBook();
  }, []);

  let [msg, setMsg] = useState("");
  const save = () => {
    let url = "http://localhost:2222/savemsg";
    let myMsg = { newmsg: msg };
    let postData = {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify(myMsg),
    };

    fetch(url, postData)
      .then((response) => response.text())
      .then((info) => {
        alert(info);
      });
  };

  
  return (
    <section>
      <h1> Send Message </h1>
      <p>
        <textarea
          rows={10}
          cols={70}
          onChange={(obj) => setMsg(obj.target.value)}
        ></textarea>
      </p>
      <button onClick={save}> Send Message </button>

      <h1> Book List : {booklist.length} </h1>

      <div id="four">
        {booklist.map((book, index) => {
          return (
            <div key={index}>
              <h3> {book.name} </h3>
              <p> {book.cost} </p>
              <p> {book.author} </p>
            </div>
          );
        })}
      </div>

      <h1> User List : {userlist.length} </h1>
      {userlist.map((fullname, index) => {
        return <p key={index}> {fullname} </p>;
      })}
    </section>
  );
};

export default MyBook;
