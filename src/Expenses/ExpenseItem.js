import Card from "../Layout/Card"
import ExpenseDate from "./ExpenseDate"
import classes from "./ExpenseItem.module.css"

const ExpenseItem = (props) => {
   
    return (
        
        <Card className={classes.container}>
            <div className={classes.datetitle}>  
            <ExpenseDate date={props.date} />
            <h2 className={classes.title}>{props.title}</h2>
            </div>
            <div className={classes.description}>
            <h2 className={classes.amount}>{props.amount}</h2>
            <h2 className={classes.price}>${props.price}</h2>
            </div>
        </Card>
       
    )
}

export default ExpenseItem