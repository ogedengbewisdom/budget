import React, { useImperativeHandle, useRef } from "react"

import classes from "./Input.module.css"

const Input = React.forwardRef((props, ref) => {

    const inputRef = useRef()

    const activate = () => {
        return inputRef.current.focus()
    }

    useImperativeHandle(ref, () => {
       return { 
        focus: activate 
    }
    
    })

    return (
        <div className={`${classes.inputs} ${props.isValid === false ? classes.invalid : ""}`}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input
                {...props.input} 
                onChange={props.onChange} 
                value={props.value} 
                ref={inputRef}
                onBlur= {props.onBlur}
             />
        </div>
    )
})

export default Input