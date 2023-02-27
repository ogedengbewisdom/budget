import React from "react"

import classes from "./Input.module.css"

const Input = React.forwardRef((props, ref) => {

    return (
        <div className={`${classes.inputs} ${props.isValid === false ? classes.invalid : ""}`}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input
                {...props.input} 
                onChange={props.onChange} 
                value={props.value} 
                ref={ref}
                onBlur= {props.onBlur}
             />
        </div>
    )
})

export default Input