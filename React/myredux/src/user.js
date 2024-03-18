import { useState } from "react";

const MyUser = () => {
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3 className="mb-4"> Manage User </h3>
                    <p>
                        Enter User Name: <input type="text" className="m-3"/>
                        <button className="btn btn-primary"> Save User </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MyUser;