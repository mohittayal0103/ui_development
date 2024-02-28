import { useState } from "react";

const Hook2 = () => {
    let [list, updateList] = useState(['Apple','Mango','Bangalore','Delhi']);
    let [newlist, pickItem] = useState("Test Item");

    const save = () => {
        updateList([...list, newlist]);
        pickItem("");
    }

    const deleteItem = (index) => {
        list.splice(index,1);
        updateList([...list]);
    }

    return(
        <div className="container">
            <h1>Homework 1 useState(): {newlist}</h1>
            <p>
                Enter Item: <input type="text" onChange={obj=>pickItem(obj.target.value)} value={newlist} /> <button onClick={save}> Save </button>
            </p>

            {list.map((item,index)=>{
                return(
                    <div>
                    <p>{item} - {item.length}</p>
                    <button onClick={deleteItem.bind(this,index)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Hook2;