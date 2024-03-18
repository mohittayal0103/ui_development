import { useState } from "react";

const MyDashboard = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12 text-center mb-4">
          <h3> React and Redux Dashboard </h3>
        </div>
        <div className="col-lg-4">
            <h5>Total User in Redux : 111</h5>
        </div>
        <div className="col-lg-4">
            <h5>Total Product in Redux : 111</h5>
        </div>
        <div className="col-lg-4">
            <h5>Total Api Record in Redux : 111</h5>
        </div>

      </div>
    </div>
  );
};

export default MyDashboard;