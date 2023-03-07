import classes from "./ExpenseFilter.module.css"

const ExpenseFilter = (props) => {

    const filteredYearHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className={classes.filteryear}>
            <div className={classes.filteryearControl}>
            <label>Filter By Year</label>
            <select value={props.selected} onChange={filteredYearHandler}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
            </div>
        </div>
    )
}

export default ExpenseFilter