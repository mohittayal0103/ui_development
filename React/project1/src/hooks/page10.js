import { useState } from "react";

const Hook5 = () => {
    let[allimage, updateImage] = useState (["1.jpg", "2.jpg", "3.png", "4.jpg"]);

    let[showimage, updateShowImage] = useState(allimage[0]);

    return(
        <div className="container">
            <h1>State Management</h1>
            <div>
                <img src={showimage} height="400" width="600" />

                <br/><br/>
                {
                    allimage.map((url,index)=>{
                        return(
                            <img 
                            key={index} 
                            src={url} 
                            height="120" 
                            width="150" 
                            onMouseEnter={updateShowImage.bind(this,url)}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Hook5;