import React from "react";
import Done from "./Done";

const SingleItem2 = (props) => {
    return (
        <>
        <span className="h3">{props.text}</span> 
        <span className="isDone">...{props.done.toString()}...</span>
        <Done index={props.index} handleDone={props.handleDone} />
        <br></br>
        </>
    )
}

export default SingleItem2;