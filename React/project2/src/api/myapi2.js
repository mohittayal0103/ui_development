import { useState, useEffect } from "react";

const Myapi2 = () => {
  let [bloglist1, updateBlog1] = useState([]);
  let [bloglist2, updateBlog2] = useState([]);

  const getBlog1 = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((commentArray) => {
        updateBlog1(commentArray);
      });
  };

  const getBlog2 = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albumArray) => {
        updateBlog2(albumArray);
      });
  };

  useEffect(() => {
    getBlog1();
    getBlog2();
  }, [true]);

  return (
    <div className="container">
      <h1>Home Work 2 - API</h1>
      <br />
      <h2> Comments </h2>
      {bloglist1.map((comment, index) => {
        return (
          <div key={index} className="blog1">
            <h3>{comment.name}</h3>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
          </div>
        );
      })}

      <br/><br/>

      <h2> Albums </h2>
      {bloglist2.map((album, index) => {
        return (
          <div key={index} className="blog2">
            <p>{album.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Myapi2;
