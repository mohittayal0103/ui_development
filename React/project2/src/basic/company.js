const MyCompany = () => {
    let compList = ["Facebbok","Twitter","Google","Amazon","Microsoft","Hotstar","Zomato","Infocampus","Toshiba","Delloite"]

    return (
        <div className="container">
            <h1>Company List - {compList.length}</h1>
            {compList.map((compName, index) => {
                return (<p className="four" key={index}> {compName} </p>); 
            })}
        </div>
    );
};

export default MyCompany;