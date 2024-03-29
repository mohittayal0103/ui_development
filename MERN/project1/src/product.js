import { useState, useEffect } from "react";

const ManageProduct = () => {
  let [allproduct, updateProduct] = useState([]);

  const getProduct = () => {
    fetch("http://localhost:2222/allbook1")
      .then((response) => response.json())
      .then((productArray) => {
        updateProduct(productArray);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container mb-4 mt-5">
      <div className="row text-center">
        <div className="col-lg-12">
          <h1 className="mb-4">
            {allproduct.length} - Product in Stock
          </h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Available in City</th>
              </tr>
            </thead>
            <tbody>
              {allproduct.map((product, index) => {
                return (
                  <tr valign="top">
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.seller}</td>
                    <td>
                      {product.city.map((cityname, index2) => {
                        return <div key={index2}>{cityname}</div>;
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
