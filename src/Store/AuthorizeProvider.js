import { useState } from "react"
import AuthorizeProps from "./auth_context"


const AuthorizeProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false)

    const loginHandler = (email, password) => {
        setIsLogin(true);
    }

    const properties = {
        isLogin: isLogin,
        onLogin: loginHandler
    }

    return (<AuthorizeProps.Provider values= {properties}>
        {props.children}
    </AuthorizeProps.Provider>)
}

export default AuthorizeProvider