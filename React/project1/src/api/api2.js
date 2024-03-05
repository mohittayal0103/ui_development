import { useState, useEffect } from "react";

const Myapi2 = () => {
    let [bloglist, updateBlog] = useState([]);

    const getBlog = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(blogArray=>{
            // alert(blogArray.length);
            updateBlog(blogArray);
        })
    }

    useEffect(()=>{
        getBlog();
    }, [true]);

    return(
        <div className="container">
            <h1> Read data from live server - useState(), useEffect(), fetch() </h1>
            {/* <button onClick={getBlog}>Click</button> */}
            {
                bloglist.map((blog, index)=>{
                    return(
                    <div key={index} className="blog">
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </div>
                    );
                })
            }
        </div>
    );
}

export default Myapi2;