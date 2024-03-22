import { useState, useEffect } from "react";

const Myapi3 = () => {
    let [allprod, updateProd] = useState([]);

    const getProd = () => {
        fetch("http://localhost:1234/productlist")
        .then(response=>response.json())
        .then(prodArray=>{
            updateProd(prodArray);
        })
    }

    useEffect(()=>{
        getProd();
    },[])

//Save Items
let [prodname, pickName] = useState("");
let [prodprice, pickPrice] = useState("");
let [prodqty, pickQty] = useState("");
let [prodseller, pickSeller] = useState("");

const save = () =>{
    let url = "http://localhost:1234/productlist";
    let newProd = {
        pname: prodname,
        price: prodprice,
        qty: prodqty,
        seller: prodseller
    }

    let postData = {
        headers:{'Content-Type': 'application/json'},
        method: 'post',
        body: JSON.stringify(newProd)
    }

    fetch(url, postData)
    .then(response=>response.json())
    .then(prodinfo=>{
        getProd();
        pickName("");
        pickPrice("");
        pickQty("");
        pickSeller("");
    })
}

// Search Items
let [keyword, pickKeyword] = useState("");

 //Delete Product
 const deleteProd = (prodid) => {
    let url = "http://localhost:1234/productlist/" + prodid;
    let postData = { method: "delete" };
    fetch(url, postData)
      .then((response) => response.json())
      .then((prodDelete) => {
        getProd();
      });
  }

  //Edit Product
  let [prodid, updateId] = useState("");
  const edit = (proddata) => {
    updateId(proddata.id);

    pickName(proddata.pname);
    pickPrice(proddata.price);
    pickQty(proddata.qty);
    pickSeller(proddata.seller);
  };

return(
        <div className="container">
            <h1> Home Work 3 - API/JSON </h1>
            <p>Enter Product Details!</p>
            <div className="inputarea">
                <input 
                type="text"
                placeholder="Enter Prod Name"
                onChange={obj=>pickName(obj.target.value)}
                value={prodname}
                />
                <input 
                type="text"
                placeholder="Enter Price"
                onChange={obj=>pickPrice(obj.target.value)}
                value={prodprice}
                />
                <input
                type="text"
                placeholder="Enter Quantity"
                onChange={obj=>pickQty(obj.target.value)}
                value={prodqty}
                />
                <input 
                type="text"
                placeholder="Enter Seller Name"
                onChange={obj=>pickSeller(obj.target.value)}
                value={prodseller}
                />
                <button onClick={save}> Save </button>
            </div>

            <p>
                Total Products: {allprod.length}
                <br/>
                <input 
                type="text"
                placeholder="Search Product Name"
                onChange={(obj) => pickKeyword(obj.target.value)}
                />
            </p>

            <table align="center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Seller</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allprod.map((prod, index)=>{
                            // if((prod.name).toLowerCase().match(keyword.toLowerCase()))
                            return(
                                <tr key={index}>
                                    <td>{prod.id}</td>
                                    <td>{prod.pname}</td>
                                    <td>{prod.price}</td>
                                    <td>{prod.qty}</td>
                                    <td>{prod.seller}</td>
                                    <td><button onClick={edit.bind(this, prod)}>Edit</button></td>
                                    <td><button onClick={deleteProd.bind(this, prod.id)}>Delete</button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Myapi3;