import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ClientDetails = () => {
  let { clientid } = useParams();
  let [allclient, updateClient] = useState({address:{}, company:{}});

  const getClient = () => {
    fetch("https://jsonplaceholder.typicode.com/users/"+clientid)
      .then((response) => response.json())
      .then((clientInfo) => {
        updateClient(clientInfo);
      });
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <div className="container">
      <h1>About : {allclient.name}</h1>

      <table align="center">
        <tbody>
            <tr>
                <th> User Name:: </th>
                <td> {allclient.username} </td>
            </tr>
            <tr>
                <th> Email Id: </th>
                <td> {allclient.email} </td>
            </tr>
            <tr>
                <th> Address: </th>
                <td>{allclient.address.street}, {allclient.address.suite}, {allclient.address.city} - {allclient.address.zipcode}</td>
            </tr>
            <tr>
                <th> Phone: </th>
                <td> {allclient.phone} </td>
            </tr>
            <tr>
                <th> Website: </th>
                <td> {allclient.website} </td>
            </tr>
            <tr>
                <th> Company: </th>
                <td> {allclient.company.name} </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClientDetails;
