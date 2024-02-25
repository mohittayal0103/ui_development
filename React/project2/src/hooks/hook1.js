import { useState } from "react";

    const Hook1 = () => {
        let city = ['Bangalore', 'Mumbai', 'Hisar', 'Gurugram', 'Panchkula']
        let [a,b,c,d,e] = city;

        console.log(useState());
        let [x,y] = useState((111));

        const one = () => {
            y(x+111);
        }

        let[bookList, updateBook] = useState(['HTML','CSS','JavaScript','Bootstrap']);

        return(
            <div className="container">
                <h1> useState() Hook Function </h1>
                <p>{a}</p>
                <p>{b}</p>
                <p>{c}</p>
                <p>{d}</p>
                <p>{e}</p>

                {bookList.map((bookName,index) => {
                    return(
                        <p key={index}>{bookName}</p>
                    );
                })}

                <button onClick={one}>Click to get Angel Numbers</button>
                <p>{x}</p>
            </div>
        );
    }


    export default Hook1;