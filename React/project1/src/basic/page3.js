const MyCustomer = () => {
  let allCustomer = [
    //array of object containing array
    { city: "Bangalore", userlist: ["Ali", "Raj"] },
    { city: "Mangalore", userlist: ["Sumit", "Hitesh", "Madhu"] },
    { city: "Chennai", userlist: ["Sanmukha", "Sneha", "Salim", "Punam"] },
    { city: "Mumbai", userlist: ["Santosh", "Sunil"] },
  ];

  return (
    <div>
      <h1> Manage Customer : {allCustomer.length} </h1>
      {allCustomer.map((customer, index) => {
        return (
          <fieldset key={index}>
            <legend> {customer.city} </legend>
            {customer.userlist.map((user, index2) => {
              //nested map
              return <p key={index2}> {user} </p>;
            })}
          </fieldset>
        );
      })}
    </div>
  );
};

export default MyCustomer;
