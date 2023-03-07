import { Fragment, useState } from "react"
import AddButton from "./AddButton"
import NewExpense from "./NewExpense"


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
        addingNewExpense = <NewExpense onCancel={closeFormHandler}/>
    }
    return (
        <Fragment>
            {addingNewExpense}    
        </Fragment>
    )
}

export default NewBudgets