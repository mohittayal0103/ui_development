import { useEffect, useState } from "react";

const MyBook = () => {
    let [booklist, updateBook] = useState([]);
    let [bookname, pickBook] = useState("");

    const save = () => {
        updateBook((booklist = [...booklist, bookname]));
        pickBook("");
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3 className="mb-4">Manage Book : {booklist.length}</h3>
                    <p>
                        Enter Book Name : 
                        <input 
                            type="text"
                            className="m-3"
                            onChange={(obj)=>pickBook(obj.target.value)}
                            value={bookname}
                        />
                        <button className="btn btn-primary" onClick={save}>
                            Save Book
                        </button>
                    </p>
                </div>
            </div>

            <div className="row mt-4">
                {
                    booklist.map((mybookname, index) => {
                        return (
                            <div className="col-lg-3 mb-4" key={index}>
                                <p className="p-4 rounded border text-center"> {mybookname} </p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default MyBook;