import { useState } from "react";

const Hook3 = () => {
    let [list, updateList] = useState(['Bangalore', 'Delhi', 'Pune', 'Kolkata']);
    let [newItem, pickItem] = useState("Test Item");

    const save = () => {
        updateList([...list, newItem]);
        pickItem("");
    }

    const deleteItem = (index) => {
        list.splice(index,1);
        updateList([...list]);
    }

    return(
        <div className="container">
            <h1> HomeWork 2 useState() : {newItem}</h1>
            <p>
                Enter Item: <input type="text" onChange={obj=>pickItem(obj.target.value)} value={newItem} /> <button onClick={save}> Save </button>
            </p>

            <div className="hook3">
            {list.map((item,index)=>{
                return (
                    <div>
                        <p>
                            {index}<br/>
                            {item}<br/>
                            {item.length}<br/>
                            <button onClick={deleteItem.bind(this, index)}>Delete</button>
                        </p>
                    </div>
                );
            })}
            </div>
            
        </div>
    );
};

export default Hook3;