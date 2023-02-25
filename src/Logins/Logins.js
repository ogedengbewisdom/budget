import { useReducer } from "react"
import Input from "../Layout/Input"
import classes from "./Logins.module.css"

const check = (state, action) => {
    if (action.type === "EMAIL") {
        return {email: action.item, isValid: action.item.includes("@")}
    } else if (action.type === "EMAIL") {
        return {email: state.email, isValid: action.email.includes("@")}
    }

    return {
        email: "",
        isValid: false
    }
}


const Logins = (props) => {

    // const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredEmail, dispatchEmail] = useReducer(check, {
        email: "",
        isValid: null
    })

    const emailChangeHandler = (event) => {
        dispatchEmail({type: "EMAIL", item: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (!enteredEmail.isValid) {
            return;

        } else {
            console.log(enteredEmail.email)
        }
        
    }


    return (
        <form onSubmit={submitHandler}>
                <div className={classes.logs}>
                <Input 
                    label = "E-mail :"
                    input = {{
                        type: props.email,
                        id: props.email
                    }}
                    onChange = {emailChangeHandler}
                    value = {enteredEmail.email}
                />

                <Input 
                    label = "Password :"
                    input = {{
                        type: props.password,
                        id: props.password
                    }}
                />
                <div className={classes.butt}>
                    <button>Logins</button>
                </div>
            </div>

        </form>
    )
}

export default Logins