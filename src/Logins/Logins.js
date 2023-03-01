import { useContext, useEffect, useReducer, useRef, useState } from "react"
import Input from "../Layout/Input"
import AuthorizeProps from "../Store/auth_context"
import classes from "./Logins.module.css"

const checkEmailObj = {
    email: "",
    isValid: null
}

const checkPasswordObj = {
    password: "",
    isValid: null
}

const checkPassword = (state, action) => {

    if (action.type === "PASSWORD") {
        
        return {
            password: action.val,
            isValid: action.val.trim().length > 6
        }

    } else if ( action.type === "PASSWORD_BLUR") {
        return {
            password: state.password,
            isValid: state.password.trim().length > 6
        }
    }
        return {
            password: "", 
            isValid: false
        }
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

    const [enteredPassword, dispatchPassword] = useReducer(checkPassword, checkPasswordObj)
    
    const [formIsValid, setFormIsValid] = useState(false)
    const authctx = useContext(AuthorizeProps)

    const passwordInputRef = useRef()
    const emailInputRef = useRef()

    const {isValid: emailvalid} = enteredEmail
    const {isValid: passwordvalid} = enteredPassword

    useEffect( () => {
        let timeOut = setTimeout(() => {
            console.log("go")
            setFormIsValid(emailvalid, passwordvalid)
        }, 200)
        return () => {
            console.log("clear")
            clearTimeout(timeOut)
        }
    }, [emailvalid, passwordvalid])

    const emailChangeHandler = (event) => {
        dispatchEmail({type: "EMAIL", item: event.target.value})
    }

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: "PASSWORD", val: event.target.value})
    }

    const emailBlur = () => {
        dispatchEmail({type: "EMAIL_BLUR"})
    }

    const passwordBlur = () => {
        dispatchPassword({type: "PASSWORD_BLUR"})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (formIsValid) {
            authctx.onLogin(enteredEmail.email, enteredPassword.password)
        } else if (!enteredEmail.email) {
            emailInputRef.current.focus()
        } else {
            passwordInputRef.current.focus()
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
                    ref = {emailInputRef}
                />

                <Input 
                    label = "Password :"
                    input = {{
                        type: "password",
                        id: "password"
                    }}
                    onChange = {passwordChangeHandler}
                    value = {enteredPassword.password}
                    isValid = {enteredPassword.isValid}
                    onBlur = {passwordBlur}
                    ref = {passwordInputRef}
                />
                <div className={classes.butt}>
                    <button className={classes.but}>Logins</button>
                </div>
            </div>

        </form>
    )
}

export default Logins