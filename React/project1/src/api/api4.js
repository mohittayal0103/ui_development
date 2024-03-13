import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Myapi4 = () => {
  let [allclient, updateClient] = useState([]);
  let [client, updateClientInfo] = useState({ address: {}, company: {} });

  const getClient = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((clientArray) => {
        updateClient(clientArray);
        updateClientInfo(clientArray[0]);
      });
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <div className="container">
      <h1>{allclient.length} : Client List</h1>
      <div className="grid">
        <div>
          {allclient.map((client, index) => {
            return (
              <p key={index} align="left">
                <Link to={`/api4details/${client.id}`}>{client.name}</Link> :
                <button onClick={updateClientInfo.bind(this, client)}>
                  {" "}
                  View{" "}
                </button>
              </p>
            );
          })}
        </div>

        <div>
          <table width="500" height="400">
            <tbody>
              <tr>
                <th> User Name:: </th>
                <td> {client.username} </td>
              </tr>
              <tr>
                <th> Email Id: </th>
                <td> {client.email} </td>
              </tr>
              <tr>
                <th> Address: </th>
                <td>
                  {client.address.street}, {client.address.suite},{" "}
                  {client.address.city} - {client.address.zipcode}
                </td>
              </tr>
              <tr>
                <th> Phone: </th>
                <td> {client.phone} </td>
              </tr>
              <tr>
                <th> Website: </th>
                <td> {client.website} </td>
              </tr>
              <tr>
                <th> Company: </th>
                <td> {client.company.name} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Myapi4;
