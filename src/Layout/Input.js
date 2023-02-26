import React from "react"

import classes from "./Input.module.css"

const Input = React.forwardRef((props, ref) => {

    return (
        <div className={classes.inputs}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input
                {...props.input} 
                onChange={props.onChange} 
                value={props.value} 
                ref={ref}
             />
        </div>
    )
})

export default Input