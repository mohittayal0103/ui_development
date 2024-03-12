 import { useState } from "react";
 import { useParams, Link } from "react-router-dom";

 const Myapi3 = () => {

    const {name, city, edu} = useParams();

    return(
        <div>
            <h1>How to use useParams()</h1>
            <Link to="/api3/Mihir/Bangalore/MCA" className="user">Mihir</Link>
            <Link to="/api3/Mahima/Panchkula/BTech" className="user">Mahima</Link>
            <Link to="/api3/Mrinal/Ludhiana/BCA" className="user">Mrinal</Link>
            <Link to="/api3/Manan/Bangalore/MTech" className="user">Manan</Link>
            <h2 align="center" >Your Name is : {name}</h2>
            <h2 align="center">Your City is : {city}</h2>
            <h2 align="center">Your Education is : {edu}</h2>
        </div>
    );
 }

 export default Myapi3;