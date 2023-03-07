import { useContext, useEffect, useReducer, useRef, useState } from "react"
import Card from "../Layout/Card"
import Input from "../Layout/Input"
import ExpenseCtx from "../Store/expense_context"
import classes from "./NewExpense.module.css"

const titleObj = {
    title: "",
    isValid: null
}

const dateObj = {
    date: "",
    isValid: null
}

const amountObj = {
    amount: "",
    isValid: null
}

const priceObj = {
    price: "",
    isValid: null
}

const titleReducer = (state, action) => {
    if (action.type === "ADD_TITLE") {
        return {
            title: action.val, isValid: action.val.trim().length > 1
        }
    }

    if (action.type === "TITLE_BLUR") {
        return {
            title: state.title, isValid: state.title.trim().length > 1
        }
    }
    return {
        title: "", isValid: false
    }
}

const dateReducer = (state, action) => {
    if (action.type === "ADD_DATE") {
        return {
            date: action.val, isValid: action.val.trim().length > 1
        }
    }

    if (action.type === "DATE_BLUR") {
        return {
            date: state.date, isValid: state.date.trim().length > 1
        }
    }
    return {
        date: "", isValid: false
    }
}

const amountReducer = (state, action) => {
    if (action.type === "ADD_AMOUNT") {
        return {
            amount: action.val, isValid: action.val.trim().length > 1
        }
    }

    if (action.type === "AMOUNT_BLUR") {
        const amountValid = state.amount
        const amountValidNumber = +amountValid
        return {
            amount: state.amount, isValid: amountValid.trim().length > 0 && amountValidNumber > 0
             
        }
    }
    return {
        amount: "", isValid: false
    }
}

const priceReducer = (state, action) => {
    if (action.type === "ADD_PRICE") {
        return {
            price: action.val, isValid: action.val.trim().length > 1
        }
    }

    if (action.type === "PRICE_BLUR") {
        const priceValid = state.price
        const priceValidNumber = +priceValid
        return {
            price: state.price, isValid: priceValid.trim().length > 0 && priceValidNumber > 0
             
        }
    }
    return {
        price: "",
        isValid: false
    }
}
const NewExpense = (props) => {

    const [enteredTitle, dispatchTitle] = useReducer(titleReducer, titleObj)
    const [enteredDate, dispatchDate] = useReducer(dateReducer, dateObj)
    const [enteredAmount, dispatchAmount] = useReducer(amountReducer, amountObj)
    const [enteredPrice, dispatchPrice] = useReducer(priceReducer, priceObj)

    const [formIsValid, setFormIsValid] = useState(false)

    const titleInputRef = useRef()
    const dateInputRef = useRef()
    const amountInputRef = useRef()
    const priceInputRef = useRef()

    const {isValid: titleIsValid} = enteredTitle
    const {isValid: dateIsValid} = enteredDate
    const {isValid: amountIsValid} = enteredAmount
    const {isValid: priceIsValid} = enteredPrice

    useEffect(() => {
        let timer = setTimeout( () => {
            setFormIsValid(titleIsValid && dateIsValid && amountIsValid && priceIsValid)
        }, 200)
        return () => {
            clearTimeout(timer)
        }
    },[titleIsValid, dateIsValid, amountIsValid, priceIsValid])

    

    const titleChangeHandler = (event) => {
        dispatchTitle({type: "ADD_TITLE", val: event.target.value})
    }

    const validTitleHandler = () => {
        dispatchTitle({type: "TITLE_BLUR"})
    }

    const dateChangeHandler = (event) => {
        dispatchDate({type: "ADD_DATE", val: event.target.value})
    }

    const validDateHandler = () => {
        dispatchDate({type: "DATE_BLUR"})
    }

    const amountChangeHandler = (event) => {
        dispatchAmount({type: "ADD_AMOUNT", val: event.target.value})
    }

    const validAmountHandler = () => {
        dispatchAmount({type: "AMOUNT_BLUR"})
    }

    const priceChangeHandler = (event) => {
        dispatchPrice({type: "ADD_PRICE", val: event.target.value})
    }

    const validPriceHandler = () => {
        dispatchPrice({type: "PRICE_BLUR"})
    }

    const expCtx = useContext(ExpenseCtx)
    
    const submitExpenseHandler = (event) => {
        event.preventDefault()
        if (formIsValid) {
            const newExpeses = {
                title: enteredTitle.title,
                date: new Date(enteredDate.date),
                amount: enteredAmount.amount,
                price: enteredPrice.price
            }
          expCtx.addExpense(newExpeses)
          dispatchTitle({type: "ADD_TITLE", val: ""})
          dispatchDate({type: "ADD_DATE", val: ""})
          dispatchAmount({type: "ADD_AMOUNT", val: ""})
          dispatchPrice({type: "ADD_PRICE", val: ""})
          
        } else if (!titleIsValid) {
            titleInputRef.current.focus()
        } else if (!dateIsValid) {
            dateInputRef.current.focus()
        } else if (!amountIsValid) {
            amountInputRef.current.focus()
        } else {
            priceInputRef.current.focus()
        }
    }

    return (
            <form onSubmit={submitExpenseHandler}>
                
                <Card className={classes.newexpenses}>
                    <div className={classes.newexpense}>
                    <div className={classes.newexpensefirst}>
                        <Input
                            label = "Title: "
                            input = {{
                                id: "title",
                                type: "text"
                            }}
                            onChange = {titleChangeHandler}
                            onBlur = {validTitleHandler}
                            value = {enteredTitle.title}
                            isValid = {enteredTitle.isValid}
                            ref = {titleInputRef}
                            />

                        <Input
                            label = "Date: "
                            input = {{
                                id: "date",
                                type: "date"
                            }}
                            onChange = {dateChangeHandler}
                            value = {enteredDate.date}
                            onBlur = {validDateHandler}
                            isValid = {enteredDate.isValid}
                            ref = {dateInputRef}

                            />
                    </div>
 
                    <div className={classes.newexpensesecond}>
                        <Input
                            label = "Amount: "
                            input = {{
                                id: "amount",
                                type: "number"
                            }}
                            onChange = {amountChangeHandler}
                            value = {enteredAmount.amount}
                            onBlur = {validAmountHandler}
                            isValid = {enteredAmount.isValid}
                            ref = {amountInputRef}
                            />

                        <Input
                            label = "Price: "
                            input = {{
                                id: "price",
                                type: "number"
                            }}
                            onChange = {priceChangeHandler}
                            onBlur = {validPriceHandler}
                            isValid = {enteredPrice.isValid}
                            value = {enteredPrice.price}
                            ref = {priceInputRef}
                            />
                        </div>
                        </div>
                        <div className={classes.expensebut}>
                            <button className={classes.expensebutt}>Add Expense</button>
                            <button type="button" onClick={props.onCancel} className={classes.expensebutt}>Cancel</button>
                        </div>
                        
                </Card>
            </form>
    )
}

export default NewExpense