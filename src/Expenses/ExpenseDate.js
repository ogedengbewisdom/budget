import Card from "../Layout/Card"
import classes from "./ExpenseDate.module.css"


const ExpenseDate = props => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = months[props.date.getMonth()]

    const date = props.date.getDate()
    
    const year = props.date.getFullYear()
    return (
        <Card className={classes.date} >
            <div className={classes.dates}>
                <div className={classes.dateYear}>{year}</div>
                <div className={classes.dateDate}>{date}</div>
                <div className={classes.dateMonth}>{month}</div>
            </div>
        </Card>
    )
}

export default ExpenseDate