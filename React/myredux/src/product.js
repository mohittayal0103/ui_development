import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyProduct = () => {
    let [pname, pickName] = useState("");
    let [pprice, pickPrice] = useState("");
    let [pqty, pickQty] = useState("");

    let allproduct = useSelector(state=>state.Productlist);
    let dispatch = useDispatch();

    const save = () => {
        // alert(pname + pprice + pqty);
        let newproduct = {name:pname, price:pprice, qty:pqty};
        let dispatchData = {type:"saveproduct", pinfo:newproduct};
        dispatch(dispatchData);
        pickName("");
        pickPrice("");
        pickQty("");
    }
    
    const delprod = (index) => {
        let dispatchData = {type:"deleteproduct", pindex:index}
        dispatch(dispatchData);
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3 className="mb-4"> Manage Product : {allproduct.length} </h3>
                    <p>
                        <input type="text" className="m-3" placeholder="Item Name" onChange={obj=>pickName(obj.target.value)} value={pname}/>
                        <input type="text" className="m-3" placeholder="Item Price" onChange={obj=>pickPrice(obj.target.value)} value={pprice}/>
                        <input type="text" className="m-3" placeholder="Item Quantity" onChange={obj=>pickQty(obj.target.value)} value={pqty}/>
                        <button className="btn btn-primary" onClick={save}> Save Product </button>
                    </p>
                </div>
            </div>

            <div className="row mt-4">
                {
                    allproduct.map((product, index) => {
                        return(
                            <div className="col-lg-2 mb-4" key={index}>
                                <h4>{product.name}</h4>
                                <p>Rs. {product.price}</p>
                                <p>in Stock : {product.qty}</p>
                                <button onClick={delprod.bind(this,index)}>Delete</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default MyProduct;