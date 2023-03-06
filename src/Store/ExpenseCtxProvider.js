import { useReducer } from "react"
import ExpenseCtx from "./expense_context"

const dummyData= [
    {
        title: "Baby Dipers",
        date: new Date ("2021-12-22"),
        amount: 2,
        price: 554.5
    },

    {
        title: "Corn Flakes",
        date: new Date ("2020-01-18"),
        amount: 5,
        price: 5.3
    },

    {
        title: "Milk",
        date: new Date ("2022-06-02"),
        amount: 3,
        price: 10.54
    }
]

const expenseDataObj = {
    item: dummyData
}

const expenseReducer = (state, action) => {
    if (action.type === "ADD_EXPENSE") {
        const updatedExpenses = [...state.item]
        updatedExpenses.unshift(action.val)
        return {
            item: updatedExpenses
        }
    }
    return expenseDataObj
}

const ExpenseCtxProvider = props => {

    const [expenseData, dispatchExpenseData] = useReducer(expenseReducer, expenseDataObj)

    const addExpenseHandler = (datas) => {
        dispatchExpenseData({type: "ADD_EXPENSE", val: datas})
    }

    const myData = {
        expenseArray: expenseData.item,
        addExpense: addExpenseHandler
    }

    return (
        <ExpenseCtx.Provider value={myData}>
            {props.children}
        </ExpenseCtx.Provider>
    )
}

export default ExpenseCtxProvider