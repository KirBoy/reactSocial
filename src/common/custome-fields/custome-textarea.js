import React from "react";

const Textarea = (props) => {
debugger
    return (
        <div>
            <input {...props}/>
            {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
        </div>
    )
}

export default Textarea