const MyEmp = () => {
    let allEmp = [
        {name: "Mohit Tayal", loc: "Panchkula", profile: "CEO" },
        {name: "Mihir Bagga", loc: "Bangalore", profile: "CTO"},
        {name: "Mrinal Garg", loc: "Chandigarh", profile: "Analytical Head"},
        {name: "Utkarsh Tayal", loc: "Delhi", profile: "Accounting Head"},
        {name: "Manan Chaudahry", loc: "Mumbai", profile: "Operations Head"}
    ];

    return(
        <div className="container">
            <h1> Emloyee List - {allEmp.length}</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th> Serial No.</th>
                        <th> Emp. Name </th>
                        <th> Emp. Location </th>
                        <th> Emp. Profile </th>
                    </tr>
                </thead>
                <tbody>
                    {allEmp.map((Emp, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{Emp.name}</td>
                                <td>{Emp.loc}</td>
                                <td>{Emp.profile}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MyEmp;