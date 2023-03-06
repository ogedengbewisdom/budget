import { useContext } from "react"
import Card from "../Layout/Card"
import ExpenseCtx from "../Store/expense_context"
import ExpenseItem from "./ExpenseItem"
import classes from "./Expenses.module.css"

const Expenses = () => {

    const expCtx = useContext(ExpenseCtx)
    return (
        <Card className={classes.expenses}>
            {expCtx.expenseArray.map(data =>
            <ExpenseItem 
            key={Math.random().toString()}
            title={data.title} 
            date= {data.date}
            price={data.price}
            amount={data.amount}
            />
            )}
            
            
        </Card>
    )
}

export default Expenses