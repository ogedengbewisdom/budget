import classes from "./Input.module.css"

const Input = (props) => {

    return (
        <div className={classes.inputs}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} onChange={props.onChange} value={props.value} />
        </div>
    )
}

export default Input