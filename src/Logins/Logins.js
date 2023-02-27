import { useReducer } from "react"
import Input from "../Layout/Input"
import classes from "./Logins.module.css"

const checkEmailObj = {
    email: "",
    isValid: null
}

const checkEmail = (state, action) => {
    if (action.type === "EMAIL") {
        return { 
            email: action.item, 
            isValid: action.item.includes("@")
        }

    } else if (action.type === "EMAIL_BLUR") {
        return { 
            email: state.email, 
            isValid: state.email.includes("@")
        }
    }
    return {
        email: "",
        isValid: false
    }
}


const Logins = (props) => {

    // const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredEmail, dispatchEmail] = useReducer(checkEmail, checkEmailObj)
    
    

    const emailChangeHandler = (event) => {
        dispatchEmail({type: "EMAIL", item: event.target.value})
    }

    const emailBlur = () => {
        dispatchEmail({type: "EMAIL_BLUR"})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (enteredEmail.isValid) {
            console.log(enteredEmail.email)
        }
    }

    return (
        <form onSubmit={submitHandler}>
                <div className={classes.logs}>
                <Input 
                    label = "E-mail :"
                    input = {{
                        type: "email",
                        id: "email"
                    }}
                    onChange = {emailChangeHandler}
                    value = {enteredEmail.email}
                    onBlur = {emailBlur}
                    isValid = {enteredEmail.isValid}
                />

                <Input 
                    label = "Password :"
                    input = {{
                        type: "password",
                        id: "password"
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