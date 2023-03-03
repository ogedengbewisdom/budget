import Card from "../Layout/Card"
import classes from "./ExpenseDate.module.css"


const ExpenseDate = props => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = months[props.date.getMonth()]

    const date = props.date.getDate()
    
    const year = props.date.getFullYear()
    return (
        <Card className={classes.shield} >
            <div className={classes.shields}>
                <div className={classes.shieldYear}>{year}</div>
                <div className={classes.shieldDate}>{date}</div>
                <div className={classes.shieldMonth}>{month}</div>
            </div>
        </Card>
    )
}

export default ExpenseDate