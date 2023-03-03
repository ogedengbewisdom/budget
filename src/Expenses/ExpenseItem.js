import Card from "../Layout/Card"
import ExpenseDate from "./ExpenseDate"
import classes from "./ExpenseItem.module.css"

const ExpenseItem = () => {

    const title = "Baby Dipers"
    const date = new Date ("2021-12-22")
    const amount = 2
    const price = 554.5

    return (
        
        <Card className={classes.container}>  
            <ExpenseDate date={date} />
            <h2>{title}</h2>
            <h2 className={classes.amount}>{amount}</h2>
            <h2 className={classes.price}>${price}</h2>
        </Card>
       
    )
}

export default ExpenseItem