const Items = () => {
  return (
    <div className="container">
        <h1> Item List </h1>
      <fieldset>
        <legend> Keyboard </legend>
        <p>Brand: Dell</p>
        <p>Price: Rs.500</p>
        <p>Quantity: 10</p>
        <p>Seller: Dell</p>
      </fieldset>
      <fieldset>
        <legend> Mouse </legend>
        <p>Brand: Logitech</p>
        <p>Price: Rs.200</p>
        <p>Quantity: 20</p>
        <p>Seller: Logitech</p>
      </fieldset>
      <fieldset>
        <legend> Monitor </legend>
        <p>Brand: Lenovo</p>
        <p>Price: Rs.12000</p>
        <p>Quantity: 5</p>
        <p>Seller: Lenovo</p>
      </fieldset>
      <fieldset>
        <legend> RAM </legend>
        <p>Brand: Intel</p>
        <p>Price: Rs.2500</p>
        <p>Quantity: 10</p>
        <p>Seller: Intel</p>
      </fieldset>
      <fieldset>
        <legend> SSD </legend>
        <p>Brand: Sony</p>
        <p>Price: Rs.4000</p>
        <p>Quantity: 15</p>
        <p>Seller: Sony</p>
      </fieldset>
    </div>
  );
};

export default Items;
