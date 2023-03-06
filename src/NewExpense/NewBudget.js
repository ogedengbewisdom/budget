import { Fragment, useState } from "react"
import AddButton from "./AddButton"
import NewExpense from "./NewExpense"
import classes from "./NewBudget.module.css"


const NewBudgets = () => {

    const [showForm, setShowForm] = useState(false)

    const openFormHandler = () => {
        setShowForm(true)
    }

    const closeFormHandler = () => {
        setShowForm(false)
    }

    let addingNewExpense = <AddButton onClick={openFormHandler}/>

    if (showForm) {
        addingNewExpense = <div className={classes.backdrop} onClick={closeFormHandler}><NewExpense className={classes.comeup} onCancel={closeFormHandler}/></div>
    }
    return (
        <Fragment>
            {addingNewExpense}    
        </Fragment>
    )
}

export default NewBudgets