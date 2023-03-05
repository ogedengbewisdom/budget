import Card from "../Layout/Card"
import Input from "../Layout/Input"
import classes from "./NewExpense.module.css"


const NewExpense = () => {
    return (
            <form>
                <Card className={classes.newexpenses}>
                    <div className={classes.newexpense}>
                    <div className={classes.newexpensefirst}>
                        <Input
                            label = "Title: "
                            input = {{
                                id: "title",
                                type: "text"
                            }}
                            />

                        <Input
                            label = "Date: "
                            input = {{
                                id: "date",
                                type: "date"
                            }}
                            />
                    </div>
 
                    <div className={classes.newexpensesecond}>
                        <Input
                            label = "Amount: "
                            input = {{
                                id: "amount",
                                type: "number"
                            }}
                            />

                        <Input
                            label = "Price: "
                            input = {{
                                id: "price",
                                type: "number"
                            }}
                            />
                        </div>
                        </div>
                        <div className={classes.expensebut}>
                            <button className={classes.expensebutt}>Add Expense</button>
                            <button className={classes.expensebutt}>Cancel</button>
                        </div>
                        
                </Card>
            </form>
    )
}

export default NewExpense