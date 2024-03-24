import { useState } from "react";
import { useSelector } from "react-redux";

const MyDashboard = () => {
    let alluser = useSelector((state) => state.Userlist);
    let allproduct = useSelector(state=>state.Productlist);
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center mb-4">
                    <h3> React and Reduxx Dashboard </h3>
                </div>
                <div className="col-lg-4">
                    <h5>Total user in Redux : {alluser.length}</h5>
                </div>
                <div className="col-lg-4">
                    <h5>Total Product in Redux : {allproduct.length}</h5>
                </div>
                <div className="col-lg-4">
                    <h5>Total Api Record in Redux</h5>
                </div>
            </div>
        </div>
    );
}

export default MyDashboard;