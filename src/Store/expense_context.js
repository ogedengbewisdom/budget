import React from "react"

const ExpenseCtx = React.createContext({
    expenseArray: [],
    addExpense: () => {}
})

export default ExpenseCtx