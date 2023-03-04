import { useContext } from "react"
import Card from "../Layout/Card"
import ExpenseCtx from "../Store/expense_context"
import ExpenseItem from "./ExpenseItem"
import classes from "./Expenses.module.css"

const Expenses = () => {

    const expCtx = useContext(ExpenseCtx)
    return (
        <Card className={classes.expenses}>
            {expCtx.expenseArray.map(pros =>
            <ExpenseItem 
            key={Math.random()}
            title={pros.title} 
            date= {pros.date}
            price={pros.price}
            amount={pros.amount}
            />
            )}
            
            
        </Card>
    )
}

export default Expenses