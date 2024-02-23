const MyCustomer = () => {
    let allCustomer = [
        {city: "Bangalore", userlist: ["Nitisha", "Yash"]},
        {city: "Mumbai", userlist: ["Muskan", "Atul", "Nihal"]},
        {city: "Gurugram", userlist: ["Diksha", "Aakriti", "Sourabh"]},
        {city: "Pune", userlist: ["Anant", "Jatin"]},
        {city: "Delhi", userlist: ["Bhavya", "Diksha", "Sahil"]},
        {city: "Noida", userlist: ["Yaman", "Anshul", "Akshita"]}
    ];

    return(
        <div className="container">
            <h1> Customer List - {allCustomer.length} </h1>
            {allCustomer.map((customer, index) => {
                return (
                    <fieldset>
                        <legend>{customer.city}</legend>
                        {customer.userlist.map((user,index2)=>{
                            return(
                                <p key={index2}>{user}</p>
                            );
                        })}
                    </fieldset>
                );
            })}
        </div>
    );
};

export default MyCustomer;