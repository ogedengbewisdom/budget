
import classes from "./AddButton.module.css"
const AddButton = (props) => {
    return (
        <div className={classes.addbuttons}>
           <button onClick={props.onClick} className={classes.addbutton}>ADD EXPENSES</button>
        </div>
    )
}

export default AddButton