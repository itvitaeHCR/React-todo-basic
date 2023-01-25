import React from "react";

const SingleItem = (props) => {

        return (
            <button className="addItem" onClick={() => props.handleClick()}> 
                add item
            </button>
        )
    }


export default SingleItem;