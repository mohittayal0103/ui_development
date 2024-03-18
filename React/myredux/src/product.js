import { useState } from "react";

const MyProduct = () => {
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3 className="mb-4"> Manage Product </h3>
                    <p>
                        <input type="text" className="m-3" placeholder="Item Name"/>
                        <input type="text" className="m-3" placeholder="Item Price"/>
                        <input type="text" className="m-3" placeholder="Item Quantity"/>
                        <button className="btn btn-primary"> Save Product </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MyProduct;