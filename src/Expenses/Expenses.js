import Card from "../Layout/Card"
import ExpenseItem from "./ExpenseItem"
import classes from "./Expenses.module.css"

const Expenses = () => {
    return (
        <Card className={classes.expenses}>
            <ExpenseItem />
            <ExpenseItem />
            <ExpenseItem />
            <ExpenseItem />
        </Card>
    )
}

export default Expenses