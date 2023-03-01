import classes from "./ExpenseItem.module.css"

const ExpenseItem = () => {

    const title = "Baby Dipers"
    const datee = new Date (2021, 12, 22)
    const amount = 2
    const price = 55.5

    return (
        <div className={classes.container}>
            <div>
                <div>{datee.toISOString()}</div>
            </div>

            <div>{title}</div>
            <div>{amount}</div>
            <div>${price}</div>
        </div>
    )
}

export default ExpenseItem