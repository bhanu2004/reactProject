import React, { useState } from "react";
const Question = ({title,info})=>{
    const [showInfo, setShowInfo] = useState(false);
    return(
        <div className="paragraph">
            <div className="questn">
                <p>{title}</p>
                <button onClick={()=>{setShowInfo(!showInfo)}}>{showInfo ? '-': '+'}</button>
            </div>
            <div className="ans">
                <p>{showInfo && info}</p>
            </div>
        </div>
    )
}
export default Question;