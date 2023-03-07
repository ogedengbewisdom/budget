import { useContext, useState } from "react"
import Card from "../Layout/Card"
import ExpenseCtx from "../Store/expense_context"
import ExpenseFilter from "./ExpenseFilter"
import ExpenseItem from "./ExpenseItem"
import classes from "./Expenses.module.css"

const Expenses = () => {

    const [filteredYear, setFilteredYear] = useState("2021")

    const dropdown = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const expCtx = useContext(ExpenseCtx)

    const filteryearExpenses = expCtx.expenseArray.filter(item => item.date.getFullYear().toString() === filteredYear)

    return (
        <Card className={classes.expenses}>
            <ExpenseFilter selected={filteredYear} onChangeFilter={dropdown} />
            {filteryearExpenses.length === 0 ? <h2 className={classes.expenseText}>No Expense Found, Please Save Expense Using the AddExpense Button Above</h2> : filteryearExpenses.map(data =>
            <ExpenseItem filteryearExpense={filteryearExpenses}
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