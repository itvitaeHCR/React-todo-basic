import React from "react";

const Done = (props) => {

        return (
            <input className="input-box" checked={props.done} type="checkbox" onClick={() => {props.handleDone(props.index)}}>
            </input>
        )
    }

export default Done;