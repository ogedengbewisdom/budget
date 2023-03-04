import { useContext } from "react"
import Card from "../Layout/Card"
import ExpenseDate from "./ExpenseDate"
import classes from "./ExpenseItem.module.css"

const ExpenseItem = (props) => {
   
    return (
        
        <Card className={classes.container}>  
            <ExpenseDate date={props.date} />
            <h2>{props.title}</h2>
            <h2 className={classes.amount}>{props.amount}</h2>
            <h2 className={classes.price}>${props.price}</h2>
        </Card>
       
    )
}

export default ExpenseItem