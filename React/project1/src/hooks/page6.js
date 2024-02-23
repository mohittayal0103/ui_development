
 import {useState} from "react"; // We will use this for state management - react func.

    const Hook1 = () => {
        let city = ['Bangalore', 'Mumbai', 'Chennai', 'Pune'];
        let [a, b, c, d] = city; // array destructure

        console.log(useState()); 
        let [x, y] = useState(1000);
        // [undefined, ƒ()] - state variable and state function
        // x is variable and y is a function. Y is used to manipulate the value of X.
        // x->Current Value, y->Updated Value, 1000->Initial Value

            const one = () => {
                y( x + 10);
            } 

            const two = () => {
                y( x - 15 );
            }

            let[bookList, updateBook] = useState(['HTML','CSS','JavaScript','BootStrap']);

        return(
            <div className="container">
                <h1>How to use useState() hook function</h1>
                <p>{a}</p>
                <p>{b}</p>
                <p>{c}</p>
                <p>{d}</p>
                <button onClick={one}> Click to + by 10 </button>
                <button onClick={two}> Click to - by 15 </button>
                <h1>{x}</h1>
                {bookList.map((bookName, index) => {
                    return(
                        <p key={index}>{bookName}</p>
                    );
                })}
            </div>
        )
    }

    export default Hook1;