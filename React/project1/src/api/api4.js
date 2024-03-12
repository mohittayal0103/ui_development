import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Myapi4 = () => {
  let [allclient, updateClient] = useState([]);

  const getClient = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((clientArray) => {
        updateClient(clientArray);
      });
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <div className="container">
      <h1>{allclient.length} : Client List</h1>
      {allclient.map((client, index) => {
        return (
          <p key={index}>
            <Link to={`/client-details/${client.id}`}>{client.name}</Link>
          </p>
        );
      })}
    </div>
  );
};

export default Myapi4;
