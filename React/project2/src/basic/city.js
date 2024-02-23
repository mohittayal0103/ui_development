const MyCity = () => {
    let cityList = ["Bangalore","Mumbai","Gurugram","Pune","Delhi","Noida"]

    return(
        <div className="container">
            <h1> City List - {cityList.length}</h1>
            {cityList.map((cityName, index) => {
                return (<p className="four" key={index}> {cityName} </p>)
            })}
        </div>
    );
};

export default MyCity;