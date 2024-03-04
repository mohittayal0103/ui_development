import {useState, useEffect} from "react";

const Myapi1 = () => {
    let [allbook, updateBook] = useState([]);
    let [allcity, updateCity] = useState([]);

    const getBook = () => {
        fetch("book.json")
        .then(response=>response.json())
        .then(bookArray=>{
            updateBook(bookArray);
        })
    }

    const getCity = () => {
        fetch("city.json")
        .then(response=>response.json())
        .then(cityArray=>{
            updateCity(cityArray);
        })
    }

    return (
        <div className="container">
            <h1> fetch(), useState(), useEffect() in React </h1>

            <div>
                <button onClick={getBook}> Book List </button>
                <button onClick={getCity}> City List </button>
            </div>

            <fieldset>
                <legend> All Book: : {allbook.length} </legend>
                {
                    allbook.map((bookName, index)=>{
                        return(
                            <p key={index}>{bookName}</p>
                        );
                    })
                }
            </fieldset>

            <fieldset>
                <legend> All City: {allcity.length} </legend>
                {
                    allcity.map((cityName, index)=>{
                        return(
                            <p key={index}>{cityName}</p>
                        );
                    })
                }
            </fieldset>
        </div>
    );
}

export default Myapi1;